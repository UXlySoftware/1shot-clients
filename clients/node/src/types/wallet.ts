/**
 * Represents an escrow wallet in the 1Shot API.
 * An escrow wallet is a wallet that the platform holds keys for.
 */
export interface EscrowWallet {
  /** Unique identifier for the wallet */
  id: string;
  /** Ethereum address of the wallet */
  accountAddress: string;
  /** ID of the business that owns this wallet */
  businessId: string;
  /** ID of the user that owns this wallet */
  userId: string;
  /** Chain ID where the wallet exists */
  chainId: number;
  /** Name of the wallet for organization purposes */
  name: string;
  /** Optional description of the wallet's purpose */
  description: string;
  /** Whether this is an admin wallet used for internal purposes */
  isAdmin: boolean;
  /** Current balance details of the wallet (null if not requested) */
  accountBalanceDetails: AccountBalanceDetails | null;
  /** Timestamp of last update */
  updated: number;
  /** Timestamp of creation */
  created: number;
  /** Whether the wallet has been deleted */
  deleted: boolean;
}

/**
 * Represents the balance details of a token in a wallet.
 * This includes both the token balance and its USD value.
 */
export interface AccountBalanceDetails {
  /** Type identifier for the token */
  type: string;
  /** Ticker symbol of the token (e.g., ETH, USDC) */
  ticker: string;
  /** Chain ID where the token exists */
  chainId: number;
  /** Contract address of the token (empty string for native tokens) */
  tokenAddress: string;
  /** Address of the wallet holding the token */
  accountAddress: string;
  /** Balance of the token as a Big Number string */
  balance: string;
  /** Number of decimals for the token */
  decimals: number;
  /** Current USD value of the token balance */
  usdValue: number;
  /** Timestamp when the USD value was last updated */
  usdValueTimestamp: number;
}
