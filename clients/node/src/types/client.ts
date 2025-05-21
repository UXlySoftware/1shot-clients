/**
 * Interface for the OneShot API client
 */
export interface IOneShotClient {
  /**
   * Make a request to the OneShot API
   * @param method HTTP method
   * @param path API endpoint path
   * @param body Optional request body
   * @returns Promise with the response data
   */
  request<T>(method: string, path: string, body?: unknown): Promise<T>;
}
