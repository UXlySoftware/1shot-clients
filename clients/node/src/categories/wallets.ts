import { IOneShotClient } from '../types/client.js';
import { EscrowWallet } from '../types/wallet.js';
import { PagedResponse } from '../types/common.js';
import {
  escrowWalletSchema,
  escrowWalletListSchema,
  listEscrowWalletsSchema,
  createEscrowWalletSchema,
  getEscrowWalletSchema,
  updateEscrowWalletSchema,
  deleteEscrowWalletSchema,
} from '../validation/wallet.js';

export class Wallets {
  constructor(private client: IOneShotClient) {}

  /**
   * List escrow wallets for a business
   * @param businessId The business ID to list wallets for
   * @param params Optional filter parameters
   * @returns Promise<PagedResponse<EscrowWallet>>
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
  ): Promise<PagedResponse<EscrowWallet>> {
    // Validate all parameters using the schema
    const validatedParams = listEscrowWalletsSchema.parse({
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

    const response = await this.client.request<PagedResponse<EscrowWallet>>('GET', path);

    // Validate the response
    return escrowWalletListSchema.parse(response);
  }

  /**
   * Create a new escrow wallet for a business
   * @param businessId The business ID to create the wallet for
   * @param params Creation parameters including chain, name, and optional description
   * @returns Promise<EscrowWallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async create(
    businessId: string,
    params: {
      chain: number;
      name: string;
      description?: string;
    }
  ): Promise<EscrowWallet> {
    // Validate all parameters using the schema
    const validatedParams = createEscrowWalletSchema.parse({
      businessId,
      ...params,
    });

    const response = await this.client.request<EscrowWallet>(
      'POST',
      `/business/${validatedParams.businessId}/wallets`,
      {
        chain: validatedParams.chain,
        name: validatedParams.name,
        description: validatedParams.description,
      }
    );

    // Validate the response
    return escrowWalletSchema.parse(response);
  }

  /**
   * Get an escrow wallet by ID
   * @param escrowWalletId The ID of the wallet to get
   * @param includeBalances Whether to include balance information
   * @returns Promise<EscrowWallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async get(escrowWalletId: string, includeBalances?: boolean): Promise<EscrowWallet> {
    // Validate all parameters using the schema
    const validatedParams = getEscrowWalletSchema.parse({
      escrowWalletId,
      includeBalances,
    });

    const queryParams = new URLSearchParams();
    if (validatedParams.includeBalances !== undefined) {
      queryParams.append('includeBalances', validatedParams.includeBalances.toString());
    }
    const queryString = queryParams.toString();
    const path = queryString
      ? `/wallets/${validatedParams.escrowWalletId}?${queryString}`
      : `/wallets/${validatedParams.escrowWalletId}`;

    const response = await this.client.request<EscrowWallet>('GET', path);

    // Validate the response
    return escrowWalletSchema.parse(response);
  }

  /**
   * Update an escrow wallet
   * @param escrowWalletId The ID of the wallet to update
   * @param params Update parameters
   * @returns Promise<EscrowWallet>
   * @throws {ZodError} If the parameters are invalid
   */
  async update(
    escrowWalletId: string,
    params: {
      name?: string;
      description?: string;
    }
  ): Promise<EscrowWallet> {
    // Validate all parameters using the schema
    const validatedParams = updateEscrowWalletSchema.parse({
      escrowWalletId,
      ...params,
    });

    const response = await this.client.request<EscrowWallet>(
      'PUT',
      `/wallets/${validatedParams.escrowWalletId}`,
      {
        name: validatedParams.name,
        description: validatedParams.description,
      }
    );

    // Validate the response
    return escrowWalletSchema.parse(response);
  }

  /**
   * Delete an escrow wallet
   * @param escrowWalletId The ID of the wallet to delete
   * @returns Promise<{ success: boolean }>
   * @throws {ZodError} If the wallet ID is invalid
   */
  async delete(escrowWalletId: string): Promise<{ success: boolean }> {
    // Validate all parameters using the schema
    const validatedParams = deleteEscrowWalletSchema.parse({
      escrowWalletId,
    });

    return this.client.request<{ success: boolean }>(
      'DELETE',
      `/wallets/${validatedParams.escrowWalletId}`
    );
  }
}
