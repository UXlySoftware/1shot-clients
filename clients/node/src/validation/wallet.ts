import { z } from 'zod';

// Validation for account balance details
export const accountBalanceDetailsSchema = z
  .object({
    type: z.number().int().describe('Type of the token (0 for native currency, 1 for ERC20)'),
    ticker: z.string().describe('Symbol of the token'),
    chainId: z.number().int().positive().describe('ID of the blockchain network'),
    tokenAddress: z.string().describe('Address of the token contract (empty for native currency)'),
    accountAddress: z.string().describe('Address of the wallet account'),
    balance: z.string().describe('Current balance of the token in the wallet'),
    decimals: z.number().int().nonnegative().describe('Number of decimal places for the token'),
  })
  .describe('Details about a token balance in a wallet');

// Validation for wallet
export const walletSchema = z
  .object({
    id: z.string().uuid().describe('Internal ID of the wallet'),
    accountAddress: z.string().describe('Blockchain address of the wallet'),
    businessId: z
      .string()
      .uuid()
      .nullable()
      .describe('ID of the business that owns this wallet, if any'),
    userId: z.string().uuid().nullable().describe('ID of the user who owns this wallet, if any'),
    chainId: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where this wallet exists'),
    name: z.string().describe('Name of the wallet'),
    description: z.string().describe('Description of the wallet'),
    isAdmin: z.boolean().describe('Whether this is an admin wallet with special privileges'),
    accountBalanceDetails: accountBalanceDetailsSchema
      .nullable()
      .describe('Current balance details of the wallet'),
    updated: z.number().describe('Unix timestamp of the last update to this wallet'),
    created: z.number().describe('Unix timestamp when this wallet was created'),
    deleted: z.boolean().describe('Whether this wallet has been deleted'),
  })
  .describe('A wallet that can hold and manage funds');

// Validation for wallet list response
export const walletListSchema = z
  .object({
    response: z.array(walletSchema).describe('List of wallets'),
    page: z.number().int().positive().describe('Current page number in the paginated results'),
    pageSize: z.number().int().positive().describe('Number of items per page'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('Total number of results across all pages'),
  })
  .describe('Paginated list of wallets');

// Validation for wallet update parameters
export const walletUpdateSchema = z
  .object({
    name: z.string().optional().describe('New name for the wallet'),
    description: z.string().optional().describe('New description for the wallet'),
  })
  .describe('Parameters for updating a wallet');

// Validation for wallet creation parameters
export const walletCreateSchema = z
  .object({
    chainId: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where the wallet will be created'),
    name: z.string().describe('Name for the new wallet'),
    description: z.string().optional().describe('Description for the new wallet'),
  })
  .describe('Parameters for creating a new wallet');

// Validation for list wallets parameters
export const listWalletsSchema = z
  .object({
    businessId: z.string().uuid().describe('ID of the business to list wallets for'),
    chainId: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('Filter wallets by blockchain network ID'),
    pageSize: z.number().int().positive().optional().describe('Number of items per page'),
    page: z.number().int().positive().optional().describe('Page number to retrieve'),
    name: z.string().optional().describe('Filter wallets by name'),
  })
  .describe('Parameters for listing wallets');

// Validation for create wallet parameters
export const createWalletSchema = z
  .object({
    businessId: z.string().uuid().describe('ID of the business to create the wallet for'),
    chainId: z
      .number()
      .int()
      .positive()
      .describe('ID of the blockchain network where the wallet will be created'),
    name: z.string().describe('Name for the new wallet'),
    description: z.string().optional().describe('Description for the new wallet'),
  })
  .describe('Parameters for creating a new wallet');

// Validation for get wallet parameters
export const getWalletSchema = z
  .object({
    walletId: z.string().uuid().describe('ID of the wallet to retrieve'),
    includeBalances: z
      .boolean()
      .optional()
      .describe('Whether to include balance information in the response'),
  })
  .describe('Parameters for retrieving a wallet');

// Validation for update wallet parameters
export const updateWalletSchema = z
  .object({
    walletId: z.string().uuid().describe('ID of the wallet to update'),
    name: z.string().optional().describe('New name for the wallet'),
    description: z.string().optional().describe('New description for the wallet'),
  })
  .describe('Parameters for updating a wallet');

// Validation for delete wallet parameters
export const deleteWalletSchema = z
  .object({
    walletId: z.string().uuid().describe('ID of the wallet to delete'),
  })
  .describe('Parameters for deleting a wallet');
