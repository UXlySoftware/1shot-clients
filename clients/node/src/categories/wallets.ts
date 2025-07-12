import { IOneShotClient } from '../types/client.js';
import { Wallet } from '../types/wallet.js';
import { Transaction } from '../types/transaction.js';
import { PagedResponse } from '../types/common.js';
import {
  walletSchema,
  walletListSchema,
  listWalletsSchema,
  createWalletSchema,
  getWalletSchema,
  updateWalletSchema,
  deleteWalletSchema,
  transferWalletSchema,
} from '../validation/wallet.js';

export class Wallets {
  constructor(private client: IOneShotClient) {}

  /**
   * List wallets for a business
   * @param businessId The business ID to list wallets for
   * @param params Optional filter parameters
   * @returns Promise<PagedResponse<Wallet>>
   * @throws {ZodError} If the parameters are invalid
   */
  async list(
    businessId: string,
    params?: {
      chainId?: number;
      pageSize?: number;
      page?: number;
      name?: string;
    }
  ): Promise<PagedResponse<Wallet>> {
    // Validate all parameters using the schema
    const validatedParams = listWalletsSchema.parse({
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
      ? `/business/${validatedParams.businessId}/wallets?${queryString}`
      : `/business/${validatedParams.businessId}/wallets`;

    const response = await this.client.request<PagedResponse<Wallet>>('GET', path);

    // Validate the response
    return walletListSchema.parse(response);
  }

  /**
   * Create a new wallet for a business
   * @param businessId The business ID to create the wallet for
   * @param params Creation parameters including chainId, name, and optional description
   * @returns Promise<Wallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async create(
    businessId: string,
    params: {
      chainId: number;
      name: string;
      description?: string;
    }
  ): Promise<Wallet> {
    // Validate all parameters using the schema
    const validatedParams = createWalletSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<Wallet>(
      'POST',
      `/business/${validatedParams.businessId}/wallets`,
      {
        chainId: validatedParams.chainId,
        name: validatedParams.name,
        description: validatedParams.description,
      }
    );

    // Validate the response
    return walletSchema.parse(response);
  }

  /**
   * Get a wallet by ID
   * @param walletId The ID of the wallet to get
   * @param includeBalances Whether to include balance information
   * @returns Promise<Wallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async get(walletId: string, includeBalances?: boolean): Promise<Wallet> {
    // Validate all parameters using the schema
    const validatedParams = getWalletSchema.parse({
      walletId,
      includeBalances,
    });

    const queryParams = new URLSearchParams();
    if (validatedParams.includeBalances !== undefined) {
      queryParams.append('includeBalances', validatedParams.includeBalances.toString());
    }
    const queryString = queryParams.toString();
    const path = queryString
      ? `/wallets/${validatedParams.walletId}?${queryString}`
      : `/wallets/${validatedParams.walletId}`;

    const response = await this.client.request<Wallet>('GET', path);

    // Validate the response
    return walletSchema.parse(response);
  }

  /**
   * Update a wallet
   * @param walletId The ID of the wallet to update
   * @param params Update parameters
   * @returns Promise<Wallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async update(
    walletId: string,
    params: {
      name?: string;
      description?: string;
    }
  ): Promise<Wallet> {
    // Validate all parameters using the schema
    const validatedParams = updateWalletSchema.parse({
      walletId,
      ...params,
    });

    const response = await this.client.request<Wallet>(
      'PUT',
      `/wallets/${validatedParams.walletId}`,
      {
        name: validatedParams.name,
        description: validatedParams.description,
      }
    );

    // Validate the response
    return walletSchema.parse(response);
  }

  /**
   * Delete a wallet
   * @param walletId The ID of the wallet to delete
   * @returns Promise<{ success: boolean }>
   * @throws {ZodError} If the wallet ID is invalid
   */
  async delete(walletId: string): Promise<{ success: boolean }> {
    // Validate all parameters using the schema
    const validatedParams = deleteWalletSchema.parse({
      walletId,
    });

    return this.client.request<{ success: boolean }>(
      'DELETE',
      `/wallets/${validatedParams.walletId}`
    );
  }

  /**
   * Transfer native tokens from a wallet
   * @param walletId The ID of the wallet to transfer funds from
   * @param params Transfer parameters including destination address, optional amount, and optional memo
   * @returns Promise<Transaction>
   * @throws {ZodError} If the parameters are invalid
   */
  async transfer(
    walletId: string,
    params: {
      destinationAccountAddress: string;
      transferAmount?: string;
      memo?: string;
    }
  ): Promise<Transaction> {
    // Validate all parameters using the schema
    const validatedParams = transferWalletSchema.parse({
      walletId,
      ...params,
    });

    const response = await this.client.request<Transaction>(
      'POST',
      `/wallets/${validatedParams.walletId}/transfer`,
      {
        destinationAccountAddress: validatedParams.destinationAccountAddress,
        transferAmount: validatedParams.transferAmount,
        memo: validatedParams.memo,
      }
    );

    // Return the response (Transaction type is already validated by the API)
    return response;
  }
}
