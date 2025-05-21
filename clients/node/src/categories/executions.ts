import { IOneShotClient } from '../types/client.js';
import { TransactionExecution } from '../types/execution.js';
import { PagedResponse } from '../types/common.js';
import {
  transactionExecutionSchema,
  transactionExecutionListSchema,
  getTransactionExecutionSchema,
  listTransactionExecutionsSchema,
} from '../validation/execution.js';

export class Executions {
  constructor(private client: IOneShotClient) {}

  /**
   * Get a specific transaction execution
   * @param executionId The ID of the execution
   * @returns Promise<TransactionExecution>
   * @throws {ZodError} If the IDs are invalid
   */
  async get(executionId: string): Promise<TransactionExecution> {
    // Validate all parameters using the schema
    const validatedParams = getTransactionExecutionSchema.parse({
      executionId,
    });

    const response = await this.client.request<TransactionExecution>(
      'GET',
      `/executions/${validatedParams.executionId}`
    );

    // Validate the response
    return transactionExecutionSchema.parse(response);
  }

  /**
   * List transaction executions for a business
   * @param businessId The business ID to list executions for
   * @param params Optional filter parameters
   * @returns Promise<PagedResponse<TransactionExecution>>
   * @throws {ZodError} If the parameters are invalid
   */
  async list(
    businessId: string,
    params?: {
      pageSize?: number;
      page?: number;
      chainId?: number;
      status?: '0' | '1' | '2' | '3' | '4'; // Pending = 0, Submitted = 1, Completed = 2,	Retrying = 3,	Failed = 4,
      escrowWalletId?: string;
      transactionId?: string;
      apiCredentialId?: string;
      userId?: string;
    }
  ): Promise<PagedResponse<TransactionExecution>> {
    // Validate all parameters using the schema
    const validatedParams = listTransactionExecutionsSchema.parse({
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
      ? `/business/${validatedParams.businessId}/transactions/executions?${queryString}`
      : `/business/${validatedParams.businessId}/transactions/executions`;

    const response = await this.client.request<PagedResponse<TransactionExecution>>('GET', path);

    // Validate the response
    return transactionExecutionListSchema.parse(response);
  }
}
