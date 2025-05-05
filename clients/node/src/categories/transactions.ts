import { OneShotClient } from '../client.js';
import { Transaction, TransactionParams, TransactionEstimate } from '../types/transaction.js';
import { SolidityStructParam } from '../types/solidity.js';
import { PagedResponse } from '../types/common.js';
import { TransactionExecution } from '../types/execution.js';
import { EthereumAbi } from '../types/abi.js';
import {
  transactionSchema,
  transactionListSchema,
  transactionEstimateSchema,
  transactionCreateSchema,
  transactionUpdateSchema,
  transactionParamsSchema,
} from '../validation/transaction.js';
import { z } from 'zod';

export class Transactions {
  constructor(private client: OneShotClient) {}

  /**
   * Execute a transaction
   * @param transactionId The ID of the transaction to execute
   * @param params Configuration parameters for the transaction
   * @param escrowWalletId Optional ID of the escrow wallet to use
   * @param memo Optional memo for the transaction
   * @returns Promise<TransactionExecution>
   * @throws {ZodError} If the parameters are invalid
   */
  async execute(
    transactionId: string,
    params: TransactionParams,
    escrowWalletId?: string,
    memo?: string
  ): Promise<TransactionExecution> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    // Validate the parameters
    const validatedParams = transactionParamsSchema.parse(params);

    // Validate the escrow wallet ID if provided
    const validatedEscrowWalletId = escrowWalletId
      ? z.string().uuid().parse(escrowWalletId)
      : undefined;

    return this.client.request<TransactionExecution>(
      'POST',
      `/transactions/${validatedTransactionId}/execute`,
      {
        params: validatedParams,
        escrowWalletId: validatedEscrowWalletId,
        memo,
      }
    );
  }

  /**
   * Test a transaction without actually executing it
   * @param transactionId The ID of the transaction to test
   * @param params Configuration parameters for the transaction
   * @returns Promise<TransactionParams> - Returns the result of the test execution
   * @throws {ZodError} If the parameters are invalid
   */
  async test(transactionId: string, params: TransactionParams): Promise<TransactionParams> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    // Validate the parameters
    const validatedParams = transactionParamsSchema.parse(params);

    return this.client.request<TransactionParams>(
      'POST',
      `/transactions/${validatedTransactionId}/test`,
      { params: validatedParams }
    );
  }

  /**
   * Get a transaction by ID
   * @param id Transaction ID
   * @returns Promise<Transaction>
   * @throws {ZodError} If the ID is invalid
   */
  async get(id: string): Promise<Transaction> {
    // Validate the transaction ID
    const validatedId = z.string().uuid().parse(id);

    const response = await this.client.request<Transaction>('GET', `/transactions/${validatedId}`);

    // Validate the response
    return transactionSchema.parse(response);
  }

  /**
   * List transactions for a business
   * @param businessId The business ID to list transactions for
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
      name?: string;
      status?: 'live' | 'archived' | 'both';
      contractAddress?: string;
    }
  ): Promise<PagedResponse<Transaction>> {
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the parameters if provided
    if (params) {
      const paramsSchema = z.object({
        pageSize: z.number().int().positive().optional(),
        page: z.number().int().positive().optional(),
        chainId: z.number().int().positive().optional(),
        name: z.string().optional(),
        status: z.enum(['live', 'archived', 'both']).optional(),
        contractAddress: z.string().optional(),
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
      ? `/business/${validatedBusinessId}/transactions?${queryString}`
      : `/business/${validatedBusinessId}/transactions`;

    const response = await this.client.request<PagedResponse<Transaction>>('GET', path);

    // Validate the response
    return transactionListSchema.parse(response);
  }

  /**
   * Estimate the cost of executing a transaction
   * @param transactionId The ID of the transaction to estimate
   * @param params Configuration parameters for the transaction
   * @param escrowWalletId Optional ID of the escrow wallet to use
   * @returns Promise<TransactionEstimate>
   * @throws {ZodError} If the parameters are invalid
   */
  async estimate(
    transactionId: string,
    params: TransactionParams,
    escrowWalletId?: string
  ): Promise<TransactionEstimate> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    // Validate the parameters
    const validatedParams = transactionParamsSchema.parse(params);

    // Validate the escrow wallet ID if provided
    const validatedEscrowWalletId = escrowWalletId
      ? z.string().uuid().parse(escrowWalletId)
      : undefined;

    const response = await this.client.request<TransactionEstimate>(
      'POST',
      `/transactions/${validatedTransactionId}/estimate`,
      {
        params: validatedParams,
        escrowWalletId: validatedEscrowWalletId,
      }
    );

    // Validate the response
    return transactionEstimateSchema.parse(response);
  }

  /**
   * Read the result of a view or pure function
   * @param transactionId The ID of the transaction to read
   * @param params Configuration parameters for the transaction
   * @returns Promise<TransactionParams> - Returns the result of the read operation
   * @throws {ZodError} If the parameters are invalid
   */
  async read(transactionId: string, params: TransactionParams): Promise<TransactionParams> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    // Validate the parameters
    const validatedParams = transactionParamsSchema.parse(params);

    return this.client.request<TransactionParams>(
      'POST',
      `/transactions/${validatedTransactionId}/read`,
      { params: validatedParams }
    );
  }

  /**
   * Create a new transaction
   * @param businessId The business ID to create the transaction for
   * @param params Transaction creation parameters
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async create(
    businessId: string,
    params: {
      chain: number;
      contractAddress: string;
      escrowWalletId: string;
      name: string;
      description: string;
      functionName: string;
      stateMutability: 'nonpayable' | 'payable' | 'view' | 'pure';
      inputs: SolidityStructParam[];
      outputs: SolidityStructParam[];
      callbackUrl?: string;
    }
  ): Promise<Transaction[]> {
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the creation parameters
    const validatedParams = transactionCreateSchema.parse(params);

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedBusinessId}/transactions`,
      validatedParams
    );

    // Validate the response
    return z.array(transactionSchema).parse(response);
  }

  /**
   * Import transactions from an ABI
   * @param businessId The business ID to create the transactions for
   * @param params ABI import parameters
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async importFromABI(
    businessId: string,
    params: {
      chain: number;
      contractAddress: string;
      escrowWalletId: string;
      name: string;
      description: string;
      abi: EthereumAbi;
    }
  ): Promise<Transaction[]> {
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the import parameters
    const importParamsSchema = z.object({
      chain: z.number().int().positive(),
      contractAddress: z.string(),
      escrowWalletId: z.string().uuid(),
      name: z.string(),
      description: z.string(),
      abi: z.array(z.any()), // We'll validate this with the ABI validation
    });

    const validatedParams = importParamsSchema.parse(params);

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedBusinessId}/transactions/import`,
      validatedParams
    );

    // Validate the response
    return z.array(transactionSchema).parse(response);
  }

  /**
   * Update a transaction
   * @param transactionId The ID of the transaction to update
   * @param params Update parameters
   * @returns Promise<Transaction>
   * @throws {ZodError} If the parameters are invalid
   */
  async update(
    transactionId: string,
    params: {
      chain?: number;
      contractAddress?: string;
      escrowWalletId?: string;
      name?: string;
      description?: string;
      functionName?: string;
      payable?: boolean;
      nativeTransaction?: boolean;
      callbackUrl?: string | null;
    }
  ): Promise<Transaction> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    // Validate the update parameters
    const validatedParams = transactionUpdateSchema.parse(params);

    const response = await this.client.request<Transaction>(
      'PUT',
      `/transactions/${validatedTransactionId}`,
      validatedParams
    );

    // Validate the response
    return transactionSchema.parse(response);
  }

  /**
   * Delete a transaction
   * @param transactionId The ID of the transaction to delete
   * @returns Promise<void>
   * @throws {ZodError} If the transaction ID is invalid
   */
  async delete(transactionId: string): Promise<void> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    return this.client.request<void>('DELETE', `/transactions/${validatedTransactionId}`);
  }

  /**
   * Restore a deleted transaction
   * @param transactionId The ID of the transaction to restore
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the transaction ID is invalid
   */
  async restore(transactionId: string): Promise<Transaction[]> {
    // Validate the transaction ID
    const validatedTransactionId = z.string().uuid().parse(transactionId);

    const response = await this.client.request<Transaction[]>(
      'PUT',
      `/transactions/${validatedTransactionId}/restore`,
      { rewardIds: [validatedTransactionId] }
    );

    // Validate the response
    return z.array(transactionSchema).parse(response);
  }
}
