import { transactionSchema } from '../validation/transaction.js';
import { z } from 'zod';

/**
 * Represents the execution of a transaction in the 1Shot API.
 * This type tracks the status and details of a transaction.
 */
export type Transaction = z.infer<typeof transactionSchema>;
