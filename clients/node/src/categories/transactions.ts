import { IOneShotClient } from '../types/client.js';
import { EthereumAbi } from '../types/abi.js';
import { NewSolidityStructParam } from '../types/struct.js';
import { FullContractDescription } from '../types/contract.js';
import {
  Transaction,
  TransactionList,
  TransactionEstimate,
  TransactionTestResult,
  TransactionParams,
  TransactionStateMutability,
  ERC7702Authorization,
} from '../types/transactions.js';
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
  transactionTestResultSchema,
} from '../validation/transaction.js';
import { TransactionExecution } from '../types/execution.js';
import { transactionExecutionSchema } from '../validation/execution.js';

export class Transactions {
  constructor(private client: IOneShotClient) {}

  /**
   * Execute a transaction
   * @param transactionId The ID of the transaction to execute
   * @param params Configuration parameters for the transaction
   * @param escrowWalletId Optional ID of the escrow wallet to use
   * @param memo Optional memo for the transaction
   * @returns Promise<Transaction>
   * @throws {ZodError} If the parameters are invalid
   */
  async execute(
    transactionId: string,
    params: TransactionParams,
    escrowWalletId?: string,
    memo?: string,
    authorizationList?: ERC7702Authorization[]
  ): Promise<TransactionExecution> {
    const validatedParams = executeTransactionSchema.parse({
      transactionId,
      params,
      escrowWalletId,
      memo,
      authorizationList,
    });

    const response = await this.client.request<Transaction>(
      'POST',
      `/transactions/${validatedParams.transactionId}/execute`,
      {
        params: validatedParams.params,
        escrowWalletId: validatedParams.escrowWalletId,
        memo: validatedParams.memo,
        authorizationList: validatedParams.authorizationList,
      }
    );

    return transactionExecutionSchema.parse(response);
  }

  /**
   * Test a transaction without actually executing it
   * @param transactionId The ID of the transaction to test
   * @param params Configuration parameters for the transaction
   * @returns Promise<TransactionTestResult>
   * @throws {ZodError} If the parameters are invalid
   */
  async test(transactionId: string, params: TransactionParams): Promise<TransactionTestResult> {
    const validatedParams = testTransactionSchema.parse({
      transactionId,
      ...params,
    });

    const response = await this.client.request<TransactionTestResult>(
      'POST',
      `/transactions/${validatedParams.transactionId}/test`,
      { params: validatedParams.params }
    );

    return transactionTestResultSchema.parse(response);
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
   * @returns Promise<TransactionList>
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
      contractDescriptionId?: string;
    }
  ): Promise<TransactionList> {
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

    const response = await this.client.request<TransactionList>('GET', path);

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
   * @returns Promise<any> The JSON value returned by the function
   * @throws {ZodError} If the parameters are invalid
   */
  async read(transactionId: string, params: TransactionParams): Promise<any> {
    const validatedParams = readTransactionSchema.parse({
      transactionId,
      params,
    });

    const response = await this.client.request<any>(
      'POST',
      `/transactions/${validatedParams.transactionId}/read`,
      { params: validatedParams.params }
    );

    return response;
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
      stateMutability: TransactionStateMutability;
      inputs: NewSolidityStructParam[];
      outputs: NewSolidityStructParam[];
      callbackUrl?: string | null;
    }
  ): Promise<Transaction> {
    const validatedParams = createTransactionSchema.parse({
      businessId,
      ...params,
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
      ...params,
    });

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedParams.businessId}/transactions/abi`,
      validatedParams
    );

    return response.map((item) => transactionSchema.parse(item));
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
      ...params,
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
   * @throws {ZodError} If the ID is invalid
   */
  async delete(transactionId: string): Promise<void> {
    const validatedParams = deleteTransactionSchema.parse({ transactionId });

    await this.client.request<void>('DELETE', `/transactions/${validatedParams.transactionId}`);
  }

  /**
   * Restore a deleted transaction
   * @param transactionId The ID of the transaction to restore
   * @returns Promise<Transaction[]>
   * @throws {ZodError} If the ID is invalid
   */
  async restore(transactionId: string): Promise<Transaction[]> {
    const validatedParams = restoreTransactionSchema.parse({ transactionId });

    const response = await this.client.request<Transaction[]>(
      'PUT',
      `/transactions/${validatedParams.transactionId}/restore`
    );

    return response.map((item) => transactionSchema.parse(item));
  }

  /**
   * Search for contract descriptions
   * @param query Search query
   * @param params Optional search parameters
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

    return response.map((item) => fullContractDescriptionSchema.parse(item));
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
      contractDescriptionId?: string;
    }
  ): Promise<Transaction[]> {
    const validatedParams = contractTransactionsSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<Transaction[]>(
      'POST',
      `/business/${validatedParams.businessId}/transactions/contract`,
      validatedParams
    );

    return response.map((item) => transactionSchema.parse(item));
  }
}
