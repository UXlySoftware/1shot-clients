import { z } from 'zod';
import {
  contractFunctionDescriptionSchema,
  contractDescriptionSchema,
  fullContractDescriptionSchema,
} from '../validation/transaction.js';

export type ContractFunctionDescription = z.infer<typeof contractFunctionDescriptionSchema>;
export type ContractDescription = z.infer<typeof contractDescriptionSchema>;
export type FullContractDescription = z.infer<typeof fullContractDescriptionSchema>;
