import { z } from 'zod';
import {
  contractFunctionDescriptionSchema,
  promptSchema,
  fullPromptSchema,
} from '../validation/contractMethod.js';

export type ContractFunctionPrompt = z.infer<typeof contractFunctionDescriptionSchema>;
export type Prompt = z.infer<typeof promptSchema>;
export type FullPrompt = z.infer<typeof fullPromptSchema>;
