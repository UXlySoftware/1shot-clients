import { IOneShotClient } from '../types/client.js';
import { Transaction } from '../types/transaction.js';
import { PagedResponse } from '../types/common.js';
import {
  transactionSchema,
  transactionListSchema,
  getTransactionSchema,
  listTransactionsSchema,
} from '../validation/transaction.js';

export class Transactions {
  constructor(private client: IOneShotClient) {}

  /**
   * Get a specific transaction
   * @param transactionId The ID of the execution
   * @returns Promise<Transaction>
   * @throws {ZodError} If the IDs are invalid
   */
  async get(transactionId: string): Promise<Transaction> {
    // Validate all parameters using the schema
    const validatedParams = getTransactionSchema.parse({
      transactionId,
    });

    const response = await this.client.request<Transaction>(
      'GET',
      `/transactions/${validatedParams.transactionId}`
    );

    // Validate the response
    return transactionSchema.parse(response);
  }

  /**
   * List transaction executions for a business
   * @param businessId The business ID to list executions for
   * @param params Optional filter parameters
   * @returns Promise<PagedResponse<Transaction>>
   * @throws {ZodError} If the parameters are invalid
   */
  async list(
    businessId: string,
    params?: {
      pageSize?: number;
      page?: number;
      chainId?: number;
      status?: '0' | '1' | '2' | '3' | '4'; // Pending = 0, Submitted = 1, Completed = 2,	Retrying = 3,	Failed = 4,
      walletId?: string;
      transactionId?: string;
      apiCredentialId?: string;
      userId?: string;
    }
  ): Promise<PagedResponse<Transaction>> {
    // Validate all parameters using the schema
    const validatedParams = listTransactionsSchema.parse({
      businessId,
      ...params,
    });

    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }
    const queryString = queryParams.toString();
    const path = queryString
      ? `/business/${validatedParams.businessId}/transactions?${queryString}`
      : `/business/${validatedParams.businessId}/transactions`;

    const response = await this.client.request<PagedResponse<Transaction>>('GET', path);

    // Validate the response
    return transactionListSchema.parse(response);
  }
}
