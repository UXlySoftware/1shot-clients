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
  value?: string | null;
  /** Optional size for numeric types (e.g., uint8, int16) */
  typeSize?: number | null;
  /** Optional second size for fixed types (e.g., fixed8x2) */
  typeSize2?: number | null;
  /** Whether the parameter is an array */
  isArray?: boolean;
  /** Optional fixed size for array types */
  arraySize?: number | null;
  /** ID of the sub-struct if type is 'struct' */
  typeStructId?: string | null;
  /** The sub-struct definition if type is 'struct' */
  typeStruct?: {
    name: string;
    params: NewSolidityStructParam[];
  } | null;
}

/**
 * Represents a parameter in a Solidity struct or function.
 * This type is used to define the structure of parameters for smart contract interactions.
 */
export interface SolidityStructParam extends NewSolidityStructParam {
  /** Unique identifier for the parameter */
  id: string;
  /** ID of the struct this parameter belongs to */
  structId: string;
  /** Name of the parameter */
  name: string;
  /** Optional description of the parameter's purpose */
  description?: string;
  /** Solidity type of the parameter */
  type: 'address' | 'bool' | 'bytes' | 'int' | 'string' | 'uint' | 'struct';
  /** Index of the parameter in the struct/function */
  index: number;
  /** Optional static value for the parameter */
  value?: string | null;
  /** Optional size for numeric types (e.g., uint8, int16) */
  typeSize?: number | null;
  /** Optional second size for fixed types (e.g., fixed8x2) */
  typeSize2?: number | null;
  /** Whether the parameter is an array */
  isArray: boolean;
  /** Optional fixed size for array types */
  arraySize?: number | null;
  /** ID of the sub-struct if type is 'struct' */
  typeStructId?: string | null;
  /** The sub-struct definition if type is 'struct' */
  typeStruct?: SolidityStruct | null;
}

/**
 * Represents a Solidity struct definition.
 * This type is used to define complex data structures for smart contract interactions.
 */
export interface SolidityStruct {
  /** Unique identifier for the struct */
  id: string;
  /** ID of the business that owns this struct */
  businessId: string;
  /** Name of the struct */
  name: string;
  /** Array of parameters that make up the struct */
  params: SolidityStructParam[];
  /** Timestamp of last update */
  updated: number;
  /** Timestamp of creation */
  created: number;
  /** Whether the struct has been deleted */
  deleted: boolean;
}
