import { ApiErr } from './types';

/**
 * Parse error message from API response as per the API error format
 * @param data
 * @param response
 * @returns
 */
export function parseErrorMessage(data: ApiErr, response: Response) {
  return {
    status: data.code || response.status,
    message: data.message || response.statusText,
  };
}
