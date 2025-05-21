import { z } from 'zod';
import {
  transactionStateMutabilitySchema,
  transactionStatusSchema,
  transactionParamsSchema,
  transactionEstimateSchema,
  transactionUpdateSchema,
  transactionSchema,
  transactionListSchema,
  listTransactionsSchema,
  executeTransactionSchema,
  testTransactionSchema,
  getTransactionSchema,
  estimateTransactionSchema,
  readTransactionSchema,
  createTransactionSchema,
  importFromABISchema,
  updateTransactionSchema,
  deleteTransactionSchema,
  restoreTransactionSchema,
  contractFunctionParamDescriptionSchema,
  contractSearchSchema,
  contractTransactionsSchema,
  transactionTestResultSchema,
} from '../validation/transaction.js';

export type TransactionStateMutability = z.infer<typeof transactionStateMutabilitySchema>;
export type TransactionStatus = z.infer<typeof transactionStatusSchema>;
export type TransactionParams = z.infer<typeof transactionParamsSchema>;
export type TransactionEstimate = z.infer<typeof transactionEstimateSchema>;
export type TransactionUpdate = z.infer<typeof transactionUpdateSchema>;
export type Transaction = z.infer<typeof transactionSchema>;
export type TransactionList = z.infer<typeof transactionListSchema>;
export type ListTransactions = z.infer<typeof listTransactionsSchema>;
export type ExecuteTransaction = z.infer<typeof executeTransactionSchema>;
export type TestTransaction = z.infer<typeof testTransactionSchema>;
export type GetTransaction = z.infer<typeof getTransactionSchema>;
export type EstimateTransaction = z.infer<typeof estimateTransactionSchema>;
export type ReadTransaction = z.infer<typeof readTransactionSchema>;
export type CreateTransaction = z.infer<typeof createTransactionSchema>;
export type ImportFromABI = z.infer<typeof importFromABISchema>;
export type UpdateTransaction = z.infer<typeof updateTransactionSchema>;
export type DeleteTransaction = z.infer<typeof deleteTransactionSchema>;
export type RestoreTransaction = z.infer<typeof restoreTransactionSchema>;
export type ContractFunctionParamDescription = z.infer<
  typeof contractFunctionParamDescriptionSchema
>;
export type ContractSearch = z.infer<typeof contractSearchSchema>;
export type ContractTransactions = z.infer<typeof contractTransactionsSchema>;
export type TransactionTestResult = z.infer<typeof transactionTestResultSchema>;
