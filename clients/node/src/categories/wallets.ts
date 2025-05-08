import { IOneShotClient } from '../types/client.js';
import { EscrowWallet } from '../types/wallet.js';
import { PagedResponse } from '../types/common.js';
import {
  escrowWalletSchema,
  escrowWalletListSchema,
  walletUpdateSchema,
  walletCreateSchema,
} from '../validation/wallet.js';
import { z } from 'zod';

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
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the parameters if provided
    if (params) {
      const paramsSchema = z.object({
        chainId: z.number().int().positive().optional(),
        pageSize: z.number().int().positive().optional(),
        page: z.number().int().positive().optional(),
        name: z.string().optional(),
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
      ? `/business/${validatedBusinessId}/wallets?${queryString}`
      : `/business/${validatedBusinessId}/wallets`;

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
    // Validate the business ID
    const validatedBusinessId = z.string().uuid().parse(businessId);

    // Validate the creation parameters
    const validatedParams = walletCreateSchema.parse(params);

    const response = await this.client.request<EscrowWallet>(
      'POST',
      `/business/${validatedBusinessId}/wallets`,
      validatedParams
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
    // Validate the wallet ID
    const validatedWalletId = z.string().uuid().parse(escrowWalletId);

    const queryParams = new URLSearchParams();
    if (includeBalances !== undefined) {
      queryParams.append('includeBalances', includeBalances.toString());
    }
    const queryString = queryParams.toString();
    const path = queryString
      ? `/wallets/${validatedWalletId}?${queryString}`
      : `/wallets/${validatedWalletId}`;

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
    // Validate the wallet ID
    const validatedWalletId = z.string().uuid().parse(escrowWalletId);

    // Validate the update parameters
    const validatedParams = walletUpdateSchema.parse(params);

    const response = await this.client.request<EscrowWallet>(
      'PUT',
      `/wallets/${validatedWalletId}`,
      validatedParams
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
    // Validate the wallet ID
    const validatedWalletId = z.string().uuid().parse(escrowWalletId);

    return this.client.request<{ success: boolean }>('DELETE', `/wallets/${validatedWalletId}`);
  }
}
