import { z } from 'zod';

// Validation for account balance details
export const accountBalanceDetailsSchema = z.object({
  type: z.string().uuid(),
  ticker: z.string(),
  chainId: z.number().int().positive(),
  tokenAddress: z.string(),
  accountAddress: z.string(),
  balance: z.string(),
  decimals: z.number().int().nonnegative(),
  usdValue: z.number(),
  usdValueTimestamp: z.number(),
});

// Validation for escrow wallet
export const escrowWalletSchema = z.object({
  id: z.string().uuid(),
  accountAddress: z.string(),
  businessId: z.string().uuid(),
  userId: z.string().uuid(),
  chainId: z.number().int().positive(),
  name: z.string(),
  description: z.string(),
  isAdmin: z.boolean(),
  accountBalanceDetails: accountBalanceDetailsSchema.nullable(),
  updated: z.number(),
  created: z.number(),
  deleted: z.boolean(),
});

// Validation for escrow wallet list response
export const escrowWalletListSchema = z.object({
  response: z.array(escrowWalletSchema),
  page: z.number().int().positive(),
  pageSize: z.number().int().positive(),
  totalResults: z.number().int().nonnegative(),
});

// Validation for wallet update parameters
export const walletUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

// Validation for wallet creation parameters
export const walletCreateSchema = z.object({
  chain: z.number().int().positive(),
});
