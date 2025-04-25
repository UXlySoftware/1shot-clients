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
  userId: z.string().uuid().nullable(),
  status: transactionExecutionStatusSchema,
  chainTransactionId: z.string().uuid().nullable(),
  memo: z.string().nullable(),
  completedTimestamp: z.number().nullable(),
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
