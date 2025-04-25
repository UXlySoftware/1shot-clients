/**
 * Represents a parameter in a Solidity struct or function.
 * This type is used to define the structure of parameters for smart contract interactions.
 */
export interface SolidityStructParam {
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
  value?: string;
  /** Optional size for numeric types (e.g., uint8, int16) */
  typeSize?: number;
  /** Optional second size for fixed types (e.g., fixed8x2) */
  typeSize2?: number;
  /** Whether the parameter is an array */
  isArray: boolean;
  /** Optional fixed size for array types */
  arraySize?: number;
  /** ID of the sub-struct if type is 'struct' */
  typeStructId?: string;
  /** The sub-struct definition if type is 'struct' */
  typeStruct?: SolidityStruct;
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
