import { z } from 'zod';
import { SolidityStructParam } from '../types/solidity.js';
import { NewSolidityStructParam } from '../types/struct.js';

// Validation for Solidity types
export const solidityTypeSchema = z
  .enum(['address', 'bool', 'bytes', 'int', 'string', 'uint', 'struct'])
  .describe('The type of a Solidity parameter');

// Validation for creating a new Solidity struct parameter
export const newSolidityStructParamSchema: z.ZodType<NewSolidityStructParam> = z
  .object({
    name: z.string().min(1).describe('The name of the parameter'),
    description: z.string().optional().describe('Description of the parameter'),
    type: solidityTypeSchema,
    index: z
      .number()
      .int()
      .min(0)
      .describe(
        'This is the relative index in the contract function. It should start at 0, and must not skip any numbers.'
      ),
    value: z
      .string()
      .optional()
      .describe(
        'This is an optional, static value for the parameter. If you set this, you will never be required or able to pass a value for this parameter when you execute the transaction, it will use the set value.'
      ),
    typeSize: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'This is an optional field that specifies the main size of the Solidity type. For example, if your type is uint, by default it is a uint256. If you want a uint8 instead, set this value to 8. It works for int, uint, fixed, ufixed, and bytes types. Valid values for bytes are 1 to 32, for others it is 256 % 8'
      ),
    typeSize2: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'This is identical to typeSize but only used for fixed and ufixed sizes. This is the second size of the fixed field, for example, fixed(typeSize)x(typeSize2).'
      ),
    isArray: z
      .boolean()
      .default(false)
      .describe(
        "If this parameter is an array type set this to true. By default, arrays can be of any size so you don't need to set arraySize."
      ),
    arraySize: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('If the parameter is a fixed size array, set this value.'),
    typeStructId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the sub-struct if the type is "struct". When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
    typeStruct: z
      .object({
        name: z.string().min(1).describe('The name of the struct'),
        params: z
          .array(z.lazy(() => newSolidityStructParamSchema))
          .describe('The parameters that make up the struct'),
      })
      .optional()
      .describe(
        'The sub-struct if the type is "struct", which will be created for use by this parameter. When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
  })
  .refine(
    (data): boolean => {
      // Validate that typeSize is only set for numeric types
      if (data.typeSize !== undefined) {
        return ['int', 'uint', 'bytes'].includes(data.type);
      }
      return true;
    },
    {
      message: 'typeSize can only be set for int, uint, or bytes types',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that typeSize2 is only set for fixed types
      if (data.typeSize2 !== undefined) {
        return ['fixed', 'ufixed'].includes(data.type);
      }
      return true;
    },
    {
      message: 'typeSize2 can only be set for fixed or ufixed types',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that arraySize is only set when isArray is true
      if (data.arraySize !== undefined) {
        return data.isArray === true;
      }
      return true;
    },
    {
      message: 'arraySize can only be set when isArray is true',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that either typeStructId or typeStruct is set for struct type
      if (data.type === 'struct') {
        return !!(data.typeStructId || data.typeStruct);
      }
      return true;
    },
    {
      message: 'Either typeStructId or typeStruct must be set for struct type',
    }
  )
  .describe('A new Solidity struct parameter that can be created');

// Validation for Solidity struct parameter
export const solidityStructParamSchema: z.ZodType<SolidityStructParam> = z
  .object({
    id: z.string().uuid().describe('Internal ID of the parameter'),
    structId: z.string().uuid().describe('Internal ID struct that owns this parameter'),
    name: z.string().min(1).describe('The name of the parameter'),
    description: z.string().optional().describe('Description of the parameter'),
    type: solidityTypeSchema,
    index: z
      .number()
      .int()
      .min(0)
      .describe(
        'This is the relative index in the contract function. It should start at 0, and must not skip any numbers.'
      ),
    value: z
      .string()
      .optional()
      .describe(
        'This is an optional, static value for the parameter. If you set this, you will never be required or able to pass a value for this parameter when you execute the transaction, it will use the set value.'
      ),
    typeSize: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'This is an optional field that specifies the main size of the Solidity type. For example, if your type is uint, by default it is a uint256. If you want a uint8 instead, set this value to 8. It works for int, uint, fixed, ufixed, and bytes types. Valid values for bytes are 1 to 32, for others it is 256 % 8'
      ),
    typeSize2: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'This is identical to typeSize but only used for fixed and ufixed sizes. This is the second size of the fixed field, for example, fixed(typeSize)x(typeSize2).'
      ),
    isArray: z
      .boolean()
      .describe(
        "If this parameter is an array type set this to true. By default, arrays can be of any size so you don't need to set arraySize."
      ),
    arraySize: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('If the parameter is a fixed size array, set this value.'),
    typeStructId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the sub-struct if the type is "struct". When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
    typeStruct: z
      .object({
        id: z.string().uuid().describe('Internal ID of the struct'),
        businessId: z.string().uuid().describe('Internal ID of the business that owns this struct'),
        name: z.string().min(1).describe('The name of the struct'),
        params: z
          .array(z.lazy(() => solidityStructParamSchema))
          .describe('The parameters that make up the struct'),
        updated: z.number().describe('Unix timestamp of when the struct was last updated'),
        created: z.number().describe('Unix timestamp of when the struct was created'),
        deleted: z.boolean().describe('Whether the struct has been deleted'),
      })
      .optional()
      .describe(
        'The sub-struct if the type is "struct", which will be created for use by this parameter. When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
  })
  .refine(
    (data): boolean => {
      // Validate that typeSize is only set for numeric types
      if (data.typeSize !== undefined) {
        return ['int', 'uint', 'bytes'].includes(data.type);
      }
      return true;
    },
    {
      message: 'typeSize can only be set for int, uint, or bytes types',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that typeSize2 is only set for fixed types
      if (data.typeSize2 !== undefined) {
        return ['fixed', 'ufixed'].includes(data.type);
      }
      return true;
    },
    {
      message: 'typeSize2 can only be set for fixed or ufixed types',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that arraySize is only set when isArray is true
      if (data.arraySize !== undefined) {
        return data.isArray === true;
      }
      return true;
    },
    {
      message: 'arraySize can only be set when isArray is true',
    }
  )
  .refine(
    (data): boolean => {
      // Validate that either typeStructId or typeStruct is set for struct type
      if (data.type === 'struct') {
        return !!(data.typeStructId || data.typeStruct);
      }
      return true;
    },
    {
      message: 'Either typeStructId or typeStruct must be set for struct type',
    }
  )
  .describe('A single defined parameter for a transaction after it has been created');

// Validation for type sizes
export const typeSizeSchema = z
  .number()
  .int()
  .min(1)
  .max(256)
  .optional()
  .describe('The size of a Solidity type (1-256)');

export const typeSize2Schema = z
  .number()
  .int()
  .min(1)
  .max(256)
  .optional()
  .describe('The second size of a fixed Solidity type (1-256)');

// Validation for array sizes
export const arraySizeSchema = z
  .number()
  .int()
  .positive()
  .optional()
  .describe('The fixed size of an array parameter');

// Validation for struct parameter updates
export const structParamUpdateSchema = z
  .object({
    name: z.string().min(1).optional().describe('The name of the parameter'),
    description: z.string().optional().describe('Description of the parameter'),
    type: solidityTypeSchema.optional(),
    index: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe(
        'This is the relative index in the contract function. It should start at 0, and must not skip any numbers.'
      ),
    value: z
      .string()
      .optional()
      .describe(
        'This is an optional, static value for the parameter. If you set this, you will never be required or able to pass a value for this parameter when you execute the transaction, it will use the set value.'
      ),
    typeSize: typeSizeSchema,
    typeSize2: typeSize2Schema,
    isArray: z
      .boolean()
      .optional()
      .describe(
        "If this parameter is an array type set this to true. By default, arrays can be of any size so you don't need to set arraySize."
      ),
    arraySize: arraySizeSchema,
    typeStructId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the sub-struct if the type is "struct". When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
    typeStruct: z
      .object({
        name: z.string().min(1).describe('The name of the struct'),
        params: z.array(z.any()).describe('The parameters that make up the struct'),
      })
      .optional()
      .describe(
        'The sub-struct if the type is "struct", which will be created for use by this parameter. When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)'
      ),
  })
  .refine(
    (data) => {
      // Validate that typeSize is only set for numeric types
      if (data.typeSize !== undefined) {
        return ['int', 'uint', 'bytes'].includes(data.type || '');
      }
      return true;
    },
    {
      message: 'typeSize can only be set for int, uint, or bytes types',
    }
  )
  .refine(
    (data) => {
      // Validate that typeSize2 is only set for fixed types
      if (data.typeSize2 !== undefined) {
        return ['fixed', 'ufixed'].includes(data.type || '');
      }
      return true;
    },
    {
      message: 'typeSize2 can only be set for fixed or ufixed types',
    }
  )
  .refine(
    (data) => {
      // Validate that arraySize is only set when isArray is true
      if (data.arraySize !== undefined) {
        return data.isArray === true;
      }
      return true;
    },
    {
      message: 'arraySize can only be set when isArray is true',
    }
  )
  .refine(
    (data) => {
      // Validate that either typeStructId or typeStruct is set for struct type
      if (data.type === 'struct') {
        return !!(data.typeStructId || data.typeStruct);
      }
      return true;
    },
    {
      message: 'Either typeStructId or typeStruct must be set for struct type',
    }
  )
  .describe('Properties that may be updated on a Solidity Struct Param');

// Validation for struct parameter update requests
export const structParamUpdateRequestSchema = z
  .object({
    id: z.string().uuid().describe('ID of the parameter to update'),
    updates: structParamUpdateSchema,
  })
  .describe('Request to update a struct parameter');

// Validation for struct updates
export const structUpdateSchema = z
  .object({
    name: z.string().min(1).describe('The name of the struct'),
  })
  .describe('Properties that may be updated on a Solidity Struct');
