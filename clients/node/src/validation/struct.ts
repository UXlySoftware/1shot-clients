import { z } from 'zod';

// Base validation for Solidity types
export const solidityTypeSchema = z.enum([
  'address',
  'bool',
  'bytes',
  'int',
  'string',
  'uint',
  'struct',
]);

// Validation for type sizes
export const typeSizeSchema = z.number().int().min(1).max(256).optional();
export const typeSize2Schema = z.number().int().min(1).max(256).optional();

// Validation for array sizes
export const arraySizeSchema = z.number().int().positive().optional();

// Validation for struct parameter updates
export const structParamUpdateSchema = z
  .object({
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    type: solidityTypeSchema.optional(),
    index: z.number().int().min(0).optional(),
    value: z.string().optional(),
    typeSize: typeSizeSchema,
    typeSize2: typeSize2Schema,
    isArray: z.boolean().optional(),
    arraySize: arraySizeSchema,
    typeStructId: z.string().uuid().optional(),
    typeStruct: z
      .object({
        name: z.string().min(1),
        params: z.array(z.any()), // We'll validate this recursively
      })
      .optional(),
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
  );

// Validation for struct parameter update requests
export const structParamUpdateRequestSchema = z.object({
  id: z.string().uuid(),
  updates: structParamUpdateSchema,
});

// Validation for struct updates
export const structUpdateSchema = z.object({
  name: z.string().min(1),
});
