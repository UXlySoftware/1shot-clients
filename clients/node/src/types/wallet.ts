import { z } from 'zod';
import {
  accountBalanceDetailsSchema,
  walletSchema,
  walletListSchema,
  walletUpdateSchema,
  walletCreateSchema,
  listWalletsSchema,
  createWalletSchema,
  getWalletSchema,
  updateWalletSchema,
  deleteWalletSchema,
} from '../validation/wallet.js';

/**
 * Represents an escrow wallet in the 1Shot API.
 * An escrow wallet is a wallet that the platform holds keys for.
 */
export type Wallet = z.infer<typeof walletSchema>;

/**
 * Represents the balance details of a token in a wallet.
 */
export type AccountBalanceDetails = z.infer<typeof accountBalanceDetailsSchema>;

export type WalletList = z.infer<typeof walletListSchema>;
export type WalletUpdate = z.infer<typeof walletUpdateSchema>;
export type WalletCreate = z.infer<typeof walletCreateSchema>;
export type ListWallets = z.infer<typeof listWalletsSchema>;
export type CreateWallet = z.infer<typeof createWalletSchema>;
export type GetWallet = z.infer<typeof getWalletSchema>;
export type UpdateWallet = z.infer<typeof updateWalletSchema>;
export type DeleteWallet = z.infer<typeof deleteWalletSchema>;
