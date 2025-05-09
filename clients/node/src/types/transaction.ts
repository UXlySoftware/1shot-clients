import { SolidityStructParam } from './struct.js';

/**
 * Represents a transaction in the 1Shot API.
 * A transaction is a predefined call on a deployed contract.
 */
export interface Transaction {
  /** Unique identifier for the transaction */
  id: string;
  /** ID of the business that owns this transaction */
  businessId: string;
  /** Chain ID where the transaction will be executed */
  chain: number;
  /** Address of the smart contract */
  contractAddress: string;
  /** ID of the escrow wallet that will execute the transaction */
  escrowWalletId: string;
  /** Name of the transaction for organization purposes */
  name: string;
  /** Description of the transaction's purpose */
  description: string;
  /** Name of the function to call on the contract */
  functionName: string;
  /** Array of parameters required for the transaction */
  inputs: SolidityStructParam[];
  /** Array of expected output parameters */
  outputs: SolidityStructParam[];
  /** State mutability of the function (nonpayable, payable, view, or pure) */
  stateMutability: 'nonpayable' | 'payable' | 'view' | 'pure';
  /** URL for webhook notifications (null if no webhook is configured) */
  callbackUrl: string | null;
  /** Public key for webhook signature verification (null if no webhook is configured) */
  publicKey: string | null;
  /** Timestamp of last update */
  updated: number;
  /** Timestamp of creation */
  created: number;
  /** Whether the transaction has been deleted */
  deleted: boolean;
}

/**
 * Represents the estimated cost of executing a transaction.
 * This includes gas estimates and fee information.
 */
export interface TransactionEstimate {
  /** Chain ID where the transaction will be executed */
  chain: number;
  /** Address of the smart contract */
  contractAddress: string;
  /** Name of the function to call */
  functionName: string;
  /** Estimated amount of gas units required */
  gasAmount: string;
  /** Maximum fee per gas unit (null if not applicable) */
  maxFeePerGas: string | null;
  /** Maximum priority fee per gas unit (null if not applicable) */
  maxPriorityFeePerGas: string | null;
  /** Gas price in wei (null if not applicable) */
  gasPrice: string | null;
}

/**
 * Represents the parameters for a transaction execution.
 * Can include nested objects and arrays for complex parameter structures.
 */
export type TransactionParams = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | undefined
    | TransactionParams
    | Array<TransactionParams>;
};
