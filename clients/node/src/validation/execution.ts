import { z } from 'zod';

// Validation for transaction execution status
export const transactionExecutionStatusSchema = z
  .enum(['Submitted', 'Completed', 'Retrying', 'Failed'])
  .describe('The current status of a transaction execution');

// Validation for transaction execution
export const transactionExecutionSchema = z
  .object({
    id: z.string().uuid().describe('Internal ID of the transaction execution'),
    transactionId: z.string().uuid().describe('ID of the transaction being executed'),
    apiCredentialId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the API credential used for execution, if any'),
    apiKey: z.string().nullable().describe('API key used for execution, if any'),
    userId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the user who initiated the execution, if any'),
    status: transactionExecutionStatusSchema,
    chainTransactionId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the transaction on the blockchain, if available'),
    transactionHash: z
      .string()
      .nullable()
      .describe('Hash of the transaction on the blockchain, if available'),
    name: z.string().describe('Name of the transaction being executed'),
    functionName: z.string().describe('Name of the function being called'),
    chain: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where the transaction is executed'),
    memo: z.string().nullable().describe('Optional memo or note about the transaction execution'),
    completed: z
      .number()
      .nullable()
      .describe('Unix timestamp when the execution completed, if applicable'),
    updated: z.number().describe('Unix timestamp of the last update to this execution'),
    created: z.number().describe('Unix timestamp when this execution was created'),
    deleted: z.boolean().describe('Whether this execution has been deleted'),
  })
  .describe('A record of a transaction execution attempt');

// Validation for transaction execution list response
export const transactionExecutionListSchema = z
  .object({
    response: z.array(transactionExecutionSchema).describe('List of transaction executions'),
    page: z.number().int().positive().describe('Current page number in the paginated results'),
    pageSize: z.number().int().positive().describe('Number of items per page'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('Total number of results across all pages'),
  })
  .describe('Paginated list of transaction executions');

// Validation for get transaction execution parameters
export const getTransactionExecutionSchema = z
  .object({
    transactionId: z.string().uuid().describe('ID of the transaction that was executed'),
    executionId: z.string().uuid().describe('ID of the specific execution to retrieve'),
  })
  .describe('Parameters for retrieving a specific transaction execution');

// Validation for list transaction executions parameters
export const listTransactionExecutionsSchema = z
  .object({
    businessId: z.string().uuid().describe('ID of the business to list executions for'),
    pageSize: z.number().int().positive().optional().describe('Number of items per page'),
    page: z.number().int().positive().optional().describe('Page number to retrieve'),
    chainId: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('Filter executions by blockchain network ID'),
    status: z
      .enum(['0', '1', '2', '3'])
      .optional()
      .describe('Filter executions by status (0=Submitted, 1=Completed, 2=Retrying, 3=Failed)'),
    escrowWalletId: z.string().uuid().optional().describe('Filter executions by escrow wallet ID'),
    transactionId: z.string().uuid().optional().describe('Filter executions by transaction ID'),
    apiCredentialId: z
      .string()
      .uuid()
      .optional()
      .describe('Filter executions by API credential ID'),
    userId: z.string().uuid().optional().describe('Filter executions by user ID'),
  })
  .describe('Parameters for listing transaction executions');
