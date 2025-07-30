import { IOneShotClient } from '../types/client.js';
import { EthereumAbi } from '../types/abi.js';
import { NewSolidityStructParam } from '../types/struct.js';
import { FullPrompt } from '../types/contract.js';
import {
  ContractMethod,
  ContractMethodList,
  ContractMethodEstimate,
  ContractMethodTestResult,
  ContractMethodEncodeResult,
  ContractMethodParams,
  ContractMethodStateMutability,
  ERC7702Authorization,
} from '../types/contractMethod.js';
import {
  contractMethodSchema,
  contractMethodListSchema,
  contractMethodEstimateSchema,
  listContractMethodsSchema,
  executeContractMethodSchema,
  executeAsDelegatorContractMethodSchema,
  testContractMethodSchema,
  getContractMethodSchema,
  estimateContractMethodSchema,
  encodeContractMethodSchema,
  readContractMethodSchema,
  createContractMethodSchema,
  importFromABISchema,
  updateContractMethodSchema,
  deleteContractMethodSchema,
  contractSearchSchema,
  fullPromptSchema,
  contractMethodTestResultSchema,
  contractMethodEncodeResultSchema,
  assureContractMethodsFromPromptSchema,
} from '../validation/contractMethod.js';
import { Transaction } from '../types/transaction.js';
import { transactionSchema } from '../validation/transaction.js';

export class ContractMethods {
  constructor(private client: IOneShotClient) {}

  /**
   * Execute a contractMethod
   * @param contractMethodId The ID of the contractMethod to execute
   * @param params Configuration parameters for the contractMethod
   * @param options Optional execution options
   * @returns Promise<Transaction>
   * @throws {ZodError} If the parameters are invalid
   */
  async execute(
    contractMethodId: string,
    params: ContractMethodParams,
    options?: {
      walletId?: string;
      memo?: string;
      authorizationList?: ERC7702Authorization[];
      value?: string;
      contractAddress?: string;
    }
  ): Promise<Transaction> {
    const validatedParams = executeContractMethodSchema.parse({
      contractMethodId,
      params,
      ...options,
    });

    const response = await this.client.request<ContractMethod>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/execute`,
      {
        params: validatedParams.params,
        walletId: validatedParams.walletId,
        memo: validatedParams.memo,
        authorizationList: validatedParams.authorizationList,
        value: validatedParams.value,
        contractAddress: validatedParams.contractAddress,
      }
    );

    return transactionSchema.parse(response);
  }

  /**
   * Execute a contractMethod as a delegator
   * @param contractMethodId The ID of the contractMethod to execute as a delegator
   * @param params Configuration parameters for the contractMethod
   * @param options Optional execution options
   * @returns Promise<Transaction>
   * @throws {ZodError} If the parameters are invalid
   */
  async executeAsDelegator(
    contractMethodId: string,
    delegatorAddress: string,
    params: ContractMethodParams,
    options: {
      walletId?: string;
      memo?: string;
      value?: string;
    }
  ): Promise<Transaction> {
    const validatedParams = executeAsDelegatorContractMethodSchema.parse({
      contractMethodId,
      delegatorAddress,
      params,
      ...options,
    });

    const response = await this.client.request<ContractMethod>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/executeAsDelegator`,
      {
        params: validatedParams.params,
        walletId: validatedParams.walletId,
        memo: validatedParams.memo,
        delegatorAddress: validatedParams.delegatorAddress,
        value: validatedParams.value,
      }
    );

    return transactionSchema.parse(response);
  }

  /**
   * Test a contractMethod without actually executing it
   * @param contractMethodId The ID of the contractMethod to test
   * @param params Configuration parameters for the contractMethod
   * @param options Optional test options
   * @returns Promise<ContractMethodTestResult>
   * @throws {ZodError} If the parameters are invalid
   */
  async test(
    contractMethodId: string,
    params: ContractMethodParams,
    options?: {
      authorizationList?: ERC7702Authorization[];
      value?: string;
      contractAddress?: string;
    }
  ): Promise<ContractMethodTestResult> {
    const validatedParams = testContractMethodSchema.parse({
      contractMethodId,
      params,
      ...options,
    });

    const response = await this.client.request<ContractMethodTestResult>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/test`,
      {
        params: validatedParams.params,
        authorizationList: validatedParams.authorizationList,
        value: validatedParams.value,
        contractAddress: validatedParams.contractAddress,
      }
    );

    return contractMethodTestResultSchema.parse(response);
  }

  /**
   * Get a contractMethod by ID
   * @param id ContractMethod ID
   * @returns Promise<ContractMethod>
   * @throws {ZodError} If the ID is invalid
   */
  async get(id: string): Promise<ContractMethod> {
    const validatedParams = getContractMethodSchema.parse({ id });

    const response = await this.client.request<ContractMethod>(
      'GET',
      `/methods/${validatedParams.id}`
    );

    return contractMethodSchema.parse(response);
  }

  /**
   * List contractMethods for a business
   * @param businessId The business ID to list contractMethods for
   * @param params Optional filter parameters
   * @returns Promise<ContractMethodList>
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
      promptId?: string;
    }
  ): Promise<ContractMethodList> {
    // Validate all parameters using the schema
    const validatedParams = listContractMethodsSchema.parse({
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
      ? `/business/${validatedParams.businessId}/methods?${queryString}`
      : `/business/${validatedParams.businessId}/methods`;

    const response = await this.client.request<ContractMethodList>('GET', path);

    // Validate the response
    return contractMethodListSchema.parse(response);
  }

  /**
   * Estimate the cost of executing a contractMethod
   * @param contractMethodId The ID of the contractMethod to estimate
   * @param params Configuration parameters for the contractMethod
   * @param options Optional estimation options
   * @returns Promise<ContractMethodEstimate>
   * @throws {ZodError} If the parameters are invalid
   */
  async estimate(
    contractMethodId: string,
    params: ContractMethodParams,
    options?: {
      authorizationList?: ERC7702Authorization[];
      value?: string;
    }
  ): Promise<ContractMethodEstimate> {
    const validatedParams = estimateContractMethodSchema.parse({
      contractMethodId,
      params,
      ...options,
    });

    const response = await this.client.request<ContractMethodEstimate>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/estimate`,
      {
        params: validatedParams.params,
        authorizationList: validatedParams.authorizationList,
        value: validatedParams.value,
      }
    );

    return contractMethodEstimateSchema.parse(response);
  }

  /**
   * Encode a contractMethod to get the transaction data
   * @param contractMethodId The ID of the contractMethod to encode
   * @param params Configuration parameters for the contractMethod
   * @param options Optional encoding options
   * @returns Promise<ContractMethodEncodeResult>
   * @throws {ZodError} If the parameters are invalid
   */
  async encode(
    contractMethodId: string,
    params: ContractMethodParams,
    options?: {
      authorizationList?: ERC7702Authorization[];
      value?: string;
    }
  ): Promise<ContractMethodEncodeResult> {
    const validatedParams = encodeContractMethodSchema.parse({
      contractMethodId,
      params,
      ...options,
    });

    const response = await this.client.request<ContractMethodEncodeResult>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/encode`,
      {
        params: validatedParams.params,
        authorizationList: validatedParams.authorizationList,
        value: validatedParams.value,
      }
    );

    return contractMethodEncodeResultSchema.parse(response);
  }

  /**
   * Read the result of a view or pure function
   * @param contractMethodId The ID of the contractMethod to read
   * @param params Configuration parameters for the contractMethod
   * @returns Promise<any> The JSON value returned by the function
   * @throws {ZodError} If the parameters are invalid
   */
  async read(contractMethodId: string, params: ContractMethodParams): Promise<any> {
    const validatedParams = readContractMethodSchema.parse({
      contractMethodId,
      params,
    });

    const response = await this.client.request<any>(
      'POST',
      `/methods/${validatedParams.contractMethodId}/read`,
      { params: validatedParams.params }
    );

    return response;
  }

  /**
   * Create a new contractMethod
   * @param businessId The business ID to create the contractMethod for
   * @param params ContractMethod creation parameters
   * @returns Promise<ContractMethod>
   * @throws {ZodError} If the parameters are invalid
   */
  async create(
    businessId: string,
    params: {
      chainId: number;
      contractAddress: string;
      walletId: string;
      name: string;
      description: string;
      functionName: string;
      stateMutability: ContractMethodStateMutability;
      inputs: NewSolidityStructParam[];
      outputs: NewSolidityStructParam[];
      callbackUrl?: string | null;
    }
  ): Promise<ContractMethod> {
    const validatedParams = createContractMethodSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<ContractMethod>(
      'POST',
      `/business/${validatedParams.businessId}/methods`,
      validatedParams
    );

    return contractMethodSchema.parse(response);
  }

  /**
   * Import contractMethods from an ABI
   * @param businessId The business ID to create the contractMethods for
   * @param params ABI import parameters
   * @returns Promise<ContractMethod[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async importFromABI(
    businessId: string,
    params: {
      chainId: number;
      contractAddress: string;
      walletId: string;
      name: string;
      description: string;
      abi: EthereumAbi;
    }
  ): Promise<ContractMethod[]> {
    const validatedParams = importFromABISchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<ContractMethod[]>(
      'POST',
      `/business/${validatedParams.businessId}/methods/abi`,
      validatedParams
    );

    return response.map((item) => contractMethodSchema.parse(item));
  }

  /**
   * Update a contractMethod
   * @param contractMethodId The ID of the contractMethod to update
   * @param params Update parameters
   * @returns Promise<ContractMethod>
   * @throws {ZodError} If the parameters are invalid
   */
  async update(
    contractMethodId: string,
    params: {
      chainId?: number;
      contractAddress?: string;
      walletId?: string;
      name?: string;
      description?: string;
      functionName?: string;
      stateMutability?: ContractMethodStateMutability;
      callbackUrl?: string | null;
    }
  ): Promise<ContractMethod> {
    const validatedParams = updateContractMethodSchema.parse({
      contractMethodId,
      ...params,
    });

    const response = await this.client.request<ContractMethod>(
      'PUT',
      `/methods/${validatedParams.contractMethodId}`,
      validatedParams
    );

    return contractMethodSchema.parse(response);
  }

  /**
   * Delete a contractMethod
   * @param contractMethodId The ID of the contractMethod to delete
   * @returns Promise<void>
   * @throws {ZodError} If the ID is invalid
   */
  async delete(contractMethodId: string): Promise<void> {
    const validatedParams = deleteContractMethodSchema.parse({
      contractMethodId,
    });

    await this.client.request<void>('DELETE', `/methods/${validatedParams.contractMethodId}`);
  }

  /**
   * Search for contracts
   * @param query The search query
   * @param params Optional search parameters
   * @returns Promise<FullPrompt[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async search(query: string, params?: { chainId?: number }): Promise<FullPrompt[]> {
    const validatedParams = contractSearchSchema.parse({
      query,
      ...params,
    });

    const response = await this.client.request<FullPrompt[]>(
      'POST',
      '/prompts/search',
      validatedParams
    );

    return fullPromptSchema.array().parse(response);
  }

  /**
   * Assure contract methods exist for a given Prompt
   * @param businessId The business ID to create the contract methods for
   * @param params Parameters for creating contract methods from a Prompt
   * @returns Promise<ContractMethod[]>
   * @throws {ZodError} If the parameters are invalid
   */
  async assureContractMethodsFromPrompt(
    businessId: string,
    params: {
      chainId: number;
      contractAddress: string;
      walletId: string;
      promptId?: string;
    }
  ): Promise<ContractMethod[]> {
    const validatedParams = assureContractMethodsFromPromptSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<ContractMethod[]>(
      'POST',
      `/business/${validatedParams.businessId}/methods/prompt`,
      validatedParams
    );

    return contractMethodSchema.array().parse(response);
  }
}
