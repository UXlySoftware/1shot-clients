/**
 * Represents the execution of a transaction in the 1Shot API.
 * This type tracks the status and details of a transaction execution.
 */
export interface TransactionExecution {
  /** Unique identifier for the execution */
  id: string;
  /** ID of the transaction being executed */
  transactionId: string;
  /** ID of the API credential used to execute the transaction (null if executed by a user) */
  apiCredentialId: string | null;
  /** The actual API key used */
  apiKey: string | null;
  /** ID of the user who executed the transaction (null if executed by an API credential) */
  userId: string | null;
  /** Current status of the execution */
  status: 'Pending' | 'Submitted' | 'Completed' | 'Retrying' | 'Failed';
  /** ID of the chain transaction (null if not yet submitted) */
  chainTransactionId: string | null;
  /** Hash of the transaction (null if not yet submitted) */
  transactionHash: string | null;
  /** Name of the associated transaction */
  name: string;
  /** Name of the function being called */
  functionName: string;
  /** Chain ID where the transaction will be executed */
  chain: number;
  /** Optional memo or note about the execution */
  memo: string | null;
  /** Timestamp when the execution was completed (null if not completed) */
  completed: number | null;
  /** Timestamp of last update */
  updated: number;
  /** Timestamp of creation */
  created: number;
  /** Whether the execution has been deleted */
  deleted: boolean;
}
