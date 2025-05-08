import { SolidityStructParam, SolidityStruct } from './solidity';

/**
 * Properties that may be updated on a Solidity Struct Param.
 * These are the fields that can be modified when updating a struct parameter.
 */
export interface SolidityStructParamUpdate {
  /** Name of the parameter */
  name?: string;
  /** Description of the parameter's purpose */
  description?: string;
  /** Solidity type of the parameter */
  type?: 'address' | 'bool' | 'bytes' | 'int' | 'string' | 'uint' | 'struct';
  /** Relative index in the contract function (0-based, no gaps) */
  index?: number;
  /** Optional static value for the parameter */
  value?: string;
  /** Optional size for numeric types (e.g., uint8, int16) */
  typeSize?: number;
  /** Optional second size for fixed types (e.g., fixed8x2) */
  typeSize2?: number;
  /** Whether the parameter is an array */
  isArray?: boolean;
  /** Optional fixed size for array types */
  arraySize?: number;
  /** ID of the sub-struct if type is 'struct' */
  typeStructId?: string;
  /** The sub-struct definition if type is 'struct' */
  typeStruct?: {
    name: string;
    params: SolidityStructParam[];
  };
}

/**
 * Request to update a struct parameter.
 * Contains the parameter ID and the updates to apply.
 */
export interface SolidityStructParamUpdateRequest {
  /** ID of the parameter to update */
  id: string;
  /** Updates to apply to the parameter */
  updates: SolidityStructParamUpdate;
}

/**
 * Required values when creating a new Solidity Struct Parameter.
 * These fields must be provided when creating a new parameter.
 */
export interface NewSolidityStructParam {
  /** Name of the parameter */
  name: string;
  /** Optional description of the parameter's purpose */
  description?: string;
  /** Solidity type of the parameter */
  type: 'address' | 'bool' | 'bytes' | 'int' | 'string' | 'uint' | 'struct';
  /** Index of the parameter in the struct/function */
  index: number;
  /** Optional static value for the parameter */
  value?: string;
  /** Optional size for numeric types (e.g., uint8, int16) */
  typeSize?: number;
  /** Optional second size for fixed types (e.g., fixed8x2) */
  typeSize2?: number;
  /** Whether the parameter is an array */
  isArray?: boolean;
  /** Optional fixed size for array types */
  arraySize?: number;
  /** ID of the sub-struct if type is 'struct' */
  typeStructId?: string;
  /** The sub-struct definition if type is 'struct' */
  typeStruct?: {
    name: string;
    params: NewSolidityStructParam[];
  };
}

export { SolidityStruct };
