import { z } from 'zod';
import {
  accountBalanceDetailsSchema,
  escrowWalletSchema,
  escrowWalletListSchema,
  walletUpdateSchema,
  walletCreateSchema,
  listEscrowWalletsSchema,
  createEscrowWalletSchema,
  getEscrowWalletSchema,
  updateEscrowWalletSchema,
  deleteEscrowWalletSchema,
} from '../validation/wallet.js';

/**
 * Represents an escrow wallet in the 1Shot API.
 * An escrow wallet is a wallet that the platform holds keys for.
 */
export type EscrowWallet = z.infer<typeof escrowWalletSchema>;

/**
 * Represents the balance details of a token in a wallet.
 */
export type AccountBalanceDetails = z.infer<typeof accountBalanceDetailsSchema>;

export type EscrowWalletList = z.infer<typeof escrowWalletListSchema>;
export type WalletUpdate = z.infer<typeof walletUpdateSchema>;
export type WalletCreate = z.infer<typeof walletCreateSchema>;
export type ListEscrowWallets = z.infer<typeof listEscrowWalletsSchema>;
export type CreateEscrowWallet = z.infer<typeof createEscrowWalletSchema>;
export type GetEscrowWallet = z.infer<typeof getEscrowWalletSchema>;
export type UpdateEscrowWallet = z.infer<typeof updateEscrowWalletSchema>;
export type DeleteEscrowWallet = z.infer<typeof deleteEscrowWalletSchema>;
