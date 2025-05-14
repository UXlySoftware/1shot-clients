import { IOneShotClient } from '../types/client.js';
import { Transaction, TransactionParams, TransactionEstimate } from '../types/transaction.js';
import { PagedResponse } from '../types/common.js';
import { TransactionExecution } from '../types/execution.js';
import { EthereumAbi } from '../types/abi.js';
import { FullContractDescription } from '../types/contract.js';
import {
  transactionSchema,
  transactionListSchema,
  transactionEstimateSchema,
  listTransactionsSchema,
  executeTransactionSchema,
  testTransactionSchema,
  getTransactionSchema,
  estimateTransactionSchema,
  readTransactionSchema,
  createTransactionSchema,
  importFromABISchema,
  updateTransactionSchema,
  deleteTransactionSchema,
  restoreTransactionSchema,
  contractSearchSchema,
  fullContractDescriptionSchema,
  contractTransactionsSchema,
} from '../validation/transaction.js';
import { z } from 'zod';
import { NewSolidityStructParam } from 'struct.js';

export class Transactions {
  constructor(private client: IOneShotClient) {}

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
    const validatedParams = executeTransactionSchema.parse({
      transactionId,
      params,
      escrowWalletId,
      memo,
    });

    return this.client.request<TransactionExecution>(
      'POST',
      `/transactions/${validatedParams.transactionId}/execute`,
      {
        params: validatedParams.params,
        escrowWalletId: validatedParams.escrowWalletId,
        memo: validatedParams.memo,
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
    const validatedParams = testTransactionSchema.parse({
      transactionId,
      params,
    });

    return this.client.request<TransactionParams>(
      'POST',
      `/transactions/${validatedParams.transactionId}/test`,
      { params: validatedParams.params }
    );
  }

  /**
   * Get a transaction by ID
   * @param id Transaction ID
   * @returns Promise<Transaction>
   * @throws {ZodError} If the ID is invalid
   */
  async get(id: string): Promise<Transaction> {
    const validatedParams = getTransactionSchema.parse({ id });

    const response = await this.client.request<Transaction>(
      'GET',
      `/transactions/${validatedParams.id}`
    );

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
    // Validate all parameters using the schema
    const validatedParams = listTransactionsSchema.parse({
      businessId,
      ...params,
    });

    const queryParams = new URLSearchParams();
    Object.entries(validatedParams).forEach(([key, value]) => {
      if (value !== undefined && key !== 'businessId') {
        queryParams.append(key, value.toString());
      }
    });
    const queryString = queryParams.toString();
    const path = queryString
      ? `/business/${validatedParams.businessId}/transactions?${queryString}`
      : `/business/${validatedParams.businessId}/transactions`;

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
    const validatedParams = estimateTransactionSchema.parse({
      transactionId,
      params,
      escrowWalletId,
    });

    const response = await this.client.request<TransactionEstimate>(
      'POST',
      `/transactions/${validatedParams.transactionId}/estimate`,
      {
        params: validatedParams.params,
        escrowWalletId: validatedParams.escrowWalletId,
      }
    );

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
    const validatedParams = readTransactionSchema.parse({
      transactionId,
      params,
    });

    return this.client.request<TransactionParams>(
      'POST',
      `/transactions/${validatedParams.transactionId}/read`,
      { params: validatedParams.params }
    );
  }

  /**
   * Create a new transaction
   * @param businessId The business ID to create the transaction for
   * @param params Transaction creation parameters
   * @returns Promise<Transaction>
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
      inputs: NewSolidityStructParam[];
      outputs: NewSolidityStructParam[];
      callbackUrl?: string | null;
    }
  ): Promise<Transaction> {
    const validatedParams = createTransactionSchema.parse({
      businessId,
      params,
    });

    const response = await this.client.request<Transaction>(
      'POST',
      `/business/${validatedParams.businessId}/transactions`,
      validatedParams
    );

    return transactionSchema.parse(response);
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
    const validatedParams = importFromABISchema.parse({
      businessId,
      params,
    });

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedParams.businessId}/transactions/import`,
      validatedParams.params
    );

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
    const validatedParams = updateTransactionSchema.parse({
      transactionId,
      params,
    });

    const response = await this.client.request<Transaction>(
      'PUT',
      `/transactions/${validatedParams.transactionId}`,
      validatedParams.params
    );

    return transactionSchema.parse(response);
  }

  /**
   * Delete a transaction
   * @param transactionId The ID of the transaction to delete
   * @returns Promise<void>
   * @throws {ZodError} If the transaction ID is invalid
   */
  async delete(transactionId: string): Promise<void> {
    const validatedParams = deleteTransactionSchema.parse({ transactionId });

    return this.client.request<void>('DELETE', `/transactions/${validatedParams.transactionId}`);
  }

  /**
   * Restore a deleted transaction
   * @param transactionId The ID of the transaction to restore
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the transaction ID is invalid
   */
  async restore(transactionId: string): Promise<Transaction[]> {
    const validatedParams = restoreTransactionSchema.parse({ transactionId });

    const response = await this.client.request<Transaction[]>(
      'PUT',
      `/transactions/${validatedParams.transactionId}/restore`,
      { rewardIds: [validatedParams.transactionId] }
    );

    return z.array(transactionSchema).parse(response);
  }

  /**
   * Search for contract descriptions using semantic search
   * @param query The search query to find relevant contracts
   * @param params Optional parameters including chain
   * @returns Promise<FullContractDescription[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async search(query: string, params?: { chain?: number }): Promise<FullContractDescription[]> {
    const validatedParams = contractSearchSchema.parse({
      query,
      ...params,
    });

    const response = await this.client.request<FullContractDescription[]>(
      'POST',
      '/contracts/descriptions/search',
      validatedParams
    );

    return z.array(fullContractDescriptionSchema).parse(response);
  }

  /**
   * Create transactions from a contract description
   * @param businessId The business ID to create the transactions for
   * @param params Contract transaction parameters
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async contractTransactions(
    businessId: string,
    params: {
      chain: number;
      contractAddress: string;
      escrowWalletId: string;
    }
  ): Promise<Transaction[]> {
    const validatedParams = contractTransactionsSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedParams.businessId}/transactions/contract`,
      {
        chain: validatedParams.chain,
        contractAddress: validatedParams.contractAddress,
        escrowWalletId: validatedParams.escrowWalletId,
      }
    );

    return z.array(transactionSchema).parse(response);
  }
}
