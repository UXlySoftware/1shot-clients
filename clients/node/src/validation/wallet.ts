import { z } from 'zod';

// Validation for account balance details
export const accountBalanceDetailsSchema = z
  .object({
    type: z
      .number()
      .int()
      .describe('Type of the token (0 for native currency, 1 for ERC20)'),
    ticker: z.string().describe('Symbol of the token'),
    chainId: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network'),
    tokenAddress: z
      .string()
      .describe('Address of the token contract (empty for native currency)'),
    accountAddress: z
      .string()
      .describe('Address of the wallet account'),
    balance: z
      .string()
      .describe('Current balance of the token in the wallet'),
    decimals: z
      .number()
      .int()
      .nonnegative()
      .describe('Number of decimal places for the token'),
  })
  .describe('Details about a token balance in a wallet');

// Validation for escrow wallet
export const escrowWalletSchema = z
  .object({
    id: z.string().uuid().describe('Internal ID of the escrow wallet'),
    accountAddress: z
      .string()
      .describe('Blockchain address of the escrow wallet'),
    businessId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the business that owns this wallet, if any'),
    userId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the user who owns this wallet, if any'),
    chainId: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where this wallet exists'),
    name: z.string().describe('Name of the escrow wallet'),
    description: z.string().describe('Description of the escrow wallet'),
    isAdmin: z
      .boolean()
      .describe('Whether this is an admin wallet with special privileges'),
    accountBalanceDetails: z
      .object({
        type: z
          .number()
          .int()
          .describe('Type of the token (0 for native currency, 1 for ERC20)'),
        ticker: z.string().describe('Symbol of the token'),
        chainId: z
          .number()
          .int()
          .positive()
          .describe('ID of the blockchain network'),
        tokenAddress: z
          .string()
          .describe('Address of the token contract (empty for native currency)'),
        accountAddress: z
          .string()
          .describe('Address of the wallet account'),
        balance: z
          .string()
          .describe('Current balance of the token in the wallet'),
        decimals: z
          .number()
          .int()
          .nonnegative()
          .describe('Number of decimal places for the token'),
      })
      .nullable()
      .describe('Current balance details of the wallet'),
    updated: z.number().describe('Unix timestamp of the last update to this wallet'),
    created: z.number().describe('Unix timestamp when this wallet was created'),
    deleted: z.boolean().describe('Whether this wallet has been deleted'),
  })
  .describe('An escrow wallet that can hold and manage funds');

// Validation for escrow wallet list response
export const escrowWalletListSchema = z
  .object({
    response: z
      .array(escrowWalletSchema)
      .describe('List of escrow wallets'),
    page: z
      .number()
      .int()
      .positive()
      .describe('Current page number in the paginated results'),
    pageSize: z
      .number()
      .int()
      .positive()
      .describe('Number of items per page'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('Total number of results across all pages'),
  })
  .describe('Paginated list of escrow wallets');

// Validation for wallet update parameters
export const walletUpdateSchema = z
  .object({
    name: z
      .string()
      .optional()
      .describe('New name for the escrow wallet'),
    description: z
      .string()
      .optional()
      .describe('New description for the escrow wallet'),
  })
  .describe('Parameters for updating an escrow wallet');

// Validation for wallet creation parameters
export const walletCreateSchema = z
  .object({
    chain: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where the wallet will be created'),
    name: z.string().describe('Name for the new escrow wallet'),
    description: z
      .string()
      .optional()
      .describe('Description for the new escrow wallet'),
  })
  .describe('Parameters for creating a new escrow wallet');
