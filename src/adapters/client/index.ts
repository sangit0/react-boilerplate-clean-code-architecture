import { parseErrorMessage } from './parseErrorMessage';
import { ApiErr, ReqConfig } from './types';

function isObject(value: any): value is object {
  return value !== null && typeof value === 'object';
}

function createConfig(reqConfig: ReqConfig) {
  const controller = new AbortController();
  return {
    signal: controller.signal,
    ...reqConfig,
    headers: {
      ...(reqConfig.headers
        ? reqConfig.headers
        : { 'Content-Type': 'application/json; charset=utf-8' }),
    },
    controller,
  };
}

async function parseResponse(response: Response, isStreamReq: boolean) {
  let data: Promise<unknown> | unknown = null;

  if (!isStreamReq) {
    try {
      data = await response.json();
    } catch (e) {
      throw new Error(`Failed to parse response: ${(e as Error).message}`);
    }
  }

  if (response.ok) {
    return isStreamReq ? response : data;
  }

  return Promise.reject(parseErrorMessage(data as ApiErr, response));
}

export default async function client<Res = any>(
  endpoint: string,
  reqConfig: ReqConfig,
): Promise<Res> {
  const config = createConfig(reqConfig);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isStreamReq = config.headers['Content-Type']?.includes(
    'application/octet-stream',
  );

  if (
    config.body &&
    isObject(config.body) &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.headers['Content-Type']?.includes('application/json')
  ) {
    config.body = JSON.stringify(config.body);
  }

  const promise = fetch(endpoint, config as RequestInit).then(response =>
    parseResponse(response, isStreamReq),
  ) as Promise<Res | ApiErr> & { cancel(): void };

  promise.cancel = config.controller.abort;

  return promise as Promise<Res>;
}
