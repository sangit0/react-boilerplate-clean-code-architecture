export type ReqConfig = Omit<RequestInit, 'body'> & {
  body?: RequestInit['body'] | object;
};

/**
 * Request headers
 * @typedef {Object} ReqHeaders
 * @property {string} ['Content-Type'] - Content type
 * @property {string} Authorization - Authorization token
 */
export type ReqHeaders = {
  'Content-Type'?: string;
  Authorization: string;
};

/**
 * API error
 * @typedef {Object} ApiErr
 * @property {number} code - Error code
 * @property {string} message - Error message
 */
export type ApiErr = {
  code: number;
  message: string;
};
