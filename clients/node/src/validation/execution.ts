import { z } from 'zod';

// Validation for transaction execution status
export const transactionExecutionStatusSchema = z.enum([
  'Submitted',
  'Completed',
  'Retrying',
  'Failed',
]);

// Validation for transaction execution
export const transactionExecutionSchema = z.object({
  id: z.string().uuid(),
  transactionId: z.string().uuid(),
  apiCredentialId: z.string().uuid().nullable(),
  apiKey: z.string().nullable(),
  userId: z.string().uuid().nullable(),
  status: transactionExecutionStatusSchema,
  chainTransactionId: z.string().uuid().nullable(),
  transactionHash: z.string().nullable(),
  name: z.string(),
  functionName: z.string(),
  chain: z.number().int().positive(),
  memo: z.string().nullable(),
  completed: z.number().nullable(),
  updated: z.number(),
  created: z.number(),
  deleted: z.boolean(),
});

// Validation for transaction execution list response
export const transactionExecutionListSchema = z.object({
  response: z.array(transactionExecutionSchema),
  page: z.number().int().positive(),
  pageSize: z.number().int().positive(),
  totalResults: z.number().int().nonnegative(),
});
