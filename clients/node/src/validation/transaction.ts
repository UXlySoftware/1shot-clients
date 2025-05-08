import { z } from 'zod';
import { newSolidityStructParamSchema, solidityStructParamSchema } from './struct.js';

// Validation for transaction state mutability
export const transactionStateMutabilitySchema = z
  .enum(['nonpayable', 'payable', 'view', 'pure'])
  .describe('The state mutability of a Solidity function');

// Validation for transaction status
export const transactionStatusSchema = z
  .enum(['live', 'archived', 'both'])
  .describe('The status of a transaction');

// Validation for transaction parameters
type TransactionParamsSchema = z.ZodType<Record<string, any>>;

export const transactionParamsSchema: TransactionParamsSchema = z
  .record(
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
  )
  .describe('A JSON-compatible value that can be used as a parameter for a transaction');

// Validation for transaction estimate
export const transactionEstimateSchema = z
  .object({
    chain: z.number().int().positive().describe('The ChainId of a supported chain on 1Shot API'),
    contractAddress: z.string().describe('string address of contract'),
    functionName: z.string().describe('The name of the function on the contract'),
    gasAmount: z.string().describe('The amount of gas units it will use'),
    maxFeePerGas: z.string().nullable().describe('The maximum fee per gas unit'),
    maxPriorityFeePerGas: z.string().nullable().describe('The maximum priority fee per gas unit'),
    gasPrice: z.string().nullable().describe('The gas price for the transaction'),
  })
  .describe('A summary of values required to estimate the cost of executing a transaction');

// Validation for transaction creation parameters
export const transactionCreateSchema = z
  .object({
    chain: z.number().int().positive().describe('The ChainId of a supported chain on 1Shot API'),
    contractAddress: z.string().describe('string address of contract'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe('The ID of the escrow wallet that will execute the transaction'),
    name: z.string().describe('Name of transaction'),
    description: z.string().describe('Description of transaction'),
    functionName: z
      .string()
      .describe('Name of the function on the contract to call for this transaction'),
    stateMutability: transactionStateMutabilitySchema,
    inputs: z
      .array(newSolidityStructParamSchema)
      .describe('The input parameters for the transaction function'),
    outputs: z
      .array(newSolidityStructParamSchema)
      .describe('The output parameters for the transaction function'),
    callbackUrl: z
      .string()
      .url()
      .optional()
      .describe('The URL to send webhooks to when this transaction is executed'),
  })
  .describe('Parameters required to create a new transaction');

// Validation for transaction update parameters
export const transactionUpdateSchema = z
  .object({
    chain: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('The ChainId of a supported chain on 1Shot API'),
    contractAddress: z.string().optional().describe('string address of contract'),
    escrowWalletId: z
      .string()
      .uuid()
      .optional()
      .describe('The ID of the escrow wallet that will execute the transaction'),
    name: z.string().optional().describe('Name of transaction'),
    description: z.string().optional().describe('Description of transaction'),
    functionName: z
      .string()
      .optional()
      .describe('Name of the function on the contract to call for this transaction'),
    payable: z.boolean().optional().describe('Whether the transaction can receive native tokens'),
    nativeTransaction: z
      .boolean()
      .optional()
      .describe('Whether this is a native transaction (not a smart contract call)'),
    callbackUrl: z
      .string()
      .url()
      .nullable()
      .optional()
      .describe('The URL to send webhooks to when this transaction is executed'),
  })
  .describe('Parameters that can be updated for an existing transaction');

// Validation for transaction
export const transactionSchema = z
  .object({
    id: z.string().uuid().describe('internal ID of the transaction object'),
    businessId: z.string().uuid().describe('The business that owns this transaction'),
    chain: z.number().int().positive().describe('The ChainId of a supported chain on 1Shot API'),
    contractAddress: z.string().describe('string address of contract'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe('The ID of the escrow wallet that will execute the transaction'),
    name: z.string().describe('Name of transaction'),
    description: z.string().describe('Description of transaction'),
    functionName: z
      .string()
      .describe('Name of the function on the contract to call for this transaction'),
    inputs: z
      .array(solidityStructParamSchema)
      .describe('The input parameters for the transaction function'),
    outputs: z
      .array(solidityStructParamSchema)
      .describe('The output parameters for the transaction function'),
    stateMutability: transactionStateMutabilitySchema,
    callbackUrl: z
      .string()
      .url()
      .nullable()
      .describe('The URL to send webhooks to when this transaction is executed'),
    publicKey: z
      .string()
      .base64()
      .nullable()
      .describe('The public key for verifying webhook signatures'),
    updated: z.number().describe('Unix timestamp of when the transaction was last updated'),
    created: z.number().describe('Unix timestamp of when the transaction was created'),
    deleted: z.boolean().describe('Whether the transaction has been deleted'),
  })
  .describe(
    'A single defined transaction, corresponding a method call on a smart contract on a chain'
  );

// Validation for transaction list response
export const transactionListSchema = z
  .object({
    response: z.array(transactionSchema).describe('The list of transactions'),
    page: z.number().int().positive().describe('Which page of results this is'),
    pageSize: z.number().int().positive().describe('The number of results per page'),
    totalResults: z.number().int().nonnegative().describe('The total number of results available'),
  })
  .describe('A paginated list of transactions');
