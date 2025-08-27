import { z } from 'zod';

// Validation for native currency information
export const nativeCurrencyInformationSchema = z
  .object({
    name: z.string().describe('The name of the currency'),
    symbol: z.string().describe('The symbol of the currency'),
    decimals: z.number().describe('The number of decimals of the currency'),
  })
  .describe('Information about the native currency of a chain');

// Validation for chain info
export const chainInfoSchema = z
  .object({
    name: z.string().describe('The name of the chain'),
    chainId: z.number().int().positive().describe('The ChainId of a supported chain on 1Shot API'),
    averageBlockMiningTime: z
      .number()
      .describe('The average time it takes to mine a block on the chain'),
    nativeCurrency: nativeCurrencyInformationSchema.describe(
      'Information about the native currency of the chain'
    ),
    type: z.enum(['Mainnet', 'Testnet', 'Hardhat']).describe('The type of the chain'),
  })
  .describe('Information about a chain supported by 1Shot API');

// Validation for chain list response
export const chainListSchema = z
  .object({
    response: z.array(chainInfoSchema).describe('List of chains'),
    page: z.number().int().positive().describe('Current page number in the paginated results'),
    pageSize: z.number().int().positive().describe('Number of items per page'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('Total number of results across all pages'),
  })
  .describe('Paginated list of chains');

// Validation for list chains parameters
export const listChainsSchema = z
  .object({
    pageSize: z
      .number()
      .int()
      .positive()
      .optional()
      .nullable()
      .describe('Number of items per page'),
    page: z.number().int().positive().optional().nullable().describe('Page number to retrieve'),
  })
  .describe('Parameters for listing chains');
