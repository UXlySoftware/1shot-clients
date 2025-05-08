import { IOneShotClient } from '../types/client.js';
import { TransactionExecution } from '../types/execution.js';
import { PagedResponse } from '../types/common.js';
import {
  transactionExecutionSchema,
  transactionExecutionListSchema,
} from '../validation/execution.js';
import { z } from 'zod';

export class Executions {
  constructor(private client: IOneShotClient) {}

  /**
   * Get a specific transaction execution
   * @param transactionId The ID of the transaction
   * @param executionId The ID of the execution
   * @returns Promise<TransactionExecution>
   * @throws {ZodError} If the IDs are invalid
   */
  async get(transactionId: string, executionId: string): Promise<TransactionExecution> {
    // Validate the IDs
    const validatedTransactionId = z.string().uuid().parse(transactionId);
    const validatedExecutionId = z.string().uuid().parse(executionId);

    const response = await this.client.request<TransactionExecution>(
      'GET',
      `/transactions/${validatedTransactionId}/executions/${validatedExecutionId}`
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
      status?: 0 | 1 | 2 | 3; // 0=Submitted, 1=Completed, 2=Retrying, 3=Failed
      escrowWalletId?: string;
      transactionId?: string;
      apiCredentialId?: string;
      userId?: string;
    }
  ): Promise<PagedResponse<TransactionExecution>> {
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the parameters if provided
    if (params) {
      const paramsSchema = z.object({
        pageSize: z.number().int().positive().optional(),
        page: z.number().int().positive().optional(),
        chainId: z.number().int().positive().optional(),
        status: z.enum(['0', '1', '2', '3']).optional(),
        escrowWalletId: z.string().uuid().optional(),
        transactionId: z.string().uuid().optional(),
        apiCredentialId: z.string().uuid().optional(),
        userId: z.string().uuid().optional(),
      });

      paramsSchema.parse(params);
    }

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
      ? `/business/${validatedBusinessId}/transactions/executions?${queryString}`
      : `/business/${validatedBusinessId}/transactions/executions`;

    const response = await this.client.request<PagedResponse<TransactionExecution>>('GET', path);

    // Validate the response
    return transactionExecutionListSchema.parse(response);
  }
}
