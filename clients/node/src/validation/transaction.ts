import { z } from 'zod';

// Validation for transaction state mutability
export const transactionStateMutabilitySchema = z.enum(['nonpayable', 'payable', 'view', 'pure']);

// Validation for transaction status
export const transactionStatusSchema = z.enum(['live', 'archived', 'both']);

// Validation for transaction parameters
type TransactionParamsSchema = z.ZodType<Record<string, any>>;

export const transactionParamsSchema: TransactionParamsSchema = z.record(
  z.string(),
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.undefined(),
    z.lazy(() => transactionParamsSchema as TransactionParamsSchema),
    z.array(z.lazy(() => transactionParamsSchema as TransactionParamsSchema)),
  ])
);

// Validation for transaction estimate
export const transactionEstimateSchema = z.object({
  chain: z.number().int().positive(),
  contractAddress: z.string(),
  functionName: z.string(),
  gasAmount: z.string(),
  maxFeePerGas: z.string().nullable(),
  maxPriorityFeePerGas: z.string().nullable(),
  gasPrice: z.string().nullable(),
});

// Validation for transaction creation parameters
export const transactionCreateSchema = z.object({
  chain: z.number().int().positive(),
  contractAddress: z.string(),
  escrowWalletId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  functionName: z.string(),
  stateMutability: transactionStateMutabilitySchema,
  inputs: z.array(z.any()), // We'll validate this with the struct validation
  outputs: z.array(z.any()), // We'll validate this with the struct validation
  callbackUrl: z.string().url().optional(),
});

// Validation for transaction update parameters
export const transactionUpdateSchema = z.object({
  chain: z.number().int().positive().optional(),
  contractAddress: z.string().optional(),
  escrowWalletId: z.string().uuid().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  functionName: z.string().optional(),
  payable: z.boolean().optional(),
  nativeTransaction: z.boolean().optional(),
  callbackUrl: z.string().url().nullable().optional(),
});

// Validation for transaction
export const transactionSchema = z.object({
  id: z.string().uuid(),
  businessId: z.string().uuid(),
  chain: z.number().int().positive(),
  contractAddress: z.string(),
  escrowWalletId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  functionName: z.string(),
  params: z.array(z.any()), // We'll validate this with the struct validation
  outputs: z.array(z.any()), // We'll validate this with the struct validation
  stateMutability: transactionStateMutabilitySchema,
  callbackUrl: z.string().url().nullable(),
  publicKey: z.string().base64().nullable(),
  updated: z.number(),
  created: z.number(),
  deleted: z.boolean(),
});

// Validation for transaction list response
export const transactionListSchema = z.object({
  response: z.array(transactionSchema),
  page: z.number().int().positive(),
  pageSize: z.number().int().positive(),
  totalResults: z.number().int().nonnegative(),
});
