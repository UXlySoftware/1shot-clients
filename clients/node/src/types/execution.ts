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
  /** ID of the user who executed the transaction (null if executed by an API credential) */
  userId: string | null;
  /** Current status of the execution */
  status: 'Submitted' | 'Completed' | 'Retrying' | 'Failed';
  /** ID of the chain transaction (null if not yet submitted) */
  chainTransactionId: string | null;
  /** Optional memo or note about the execution */
  memo: string | null;
  /** Timestamp when the execution was completed (null if not completed) */
  completedTimestamp: number | null;
  /** Timestamp of last update */
  updated: number;
  /** Timestamp of creation */
  created: number;
  /** Whether the execution has been deleted */
  deleted: boolean;
}
