/**
 * Represents a paged response from the API.
 * This type is used for endpoints that return paginated results.
 * @template T The type of items in the response array
 */
export interface PagedResponse<T> {
  /** Array of items in the current page */
  response: T[];
  /** Current page number (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items across all pages */
  totalResults: number;
}
