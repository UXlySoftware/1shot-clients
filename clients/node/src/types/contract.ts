import { z } from 'zod';
import {
  contractFunctionInputDescriptionSchema,
  contractFunctionDescriptionSchema,
  contractDescriptionSchema,
  fullContractDescriptionSchema,
} from '../validation/transaction.js';

export type ContractFunctionInputDescription = z.infer<
  typeof contractFunctionInputDescriptionSchema
>;
export type ContractFunctionDescription = z.infer<typeof contractFunctionDescriptionSchema>;
export type ContractDescription = z.infer<typeof contractDescriptionSchema>;
export type FullContractDescription = z.infer<typeof fullContractDescriptionSchema>;
