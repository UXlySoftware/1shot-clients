import { transactionExecutionSchema } from '../validation/execution.js';
import { z } from 'zod';

/**
 * Represents the execution of a transaction in the 1Shot API.
 * This type tracks the status and details of a transaction execution.
 */
export type TransactionExecution = z.infer<typeof transactionExecutionSchema>;
