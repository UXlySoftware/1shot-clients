/**
 * Represents a parameter in an Ethereum ABI.
 * This type is used to define function parameters, event parameters, and struct fields.
 */
export type AbiParameter = {
  /** Name of the parameter (optional for some ABI types) */
  name?: string;
  /** Solidity type of the parameter */
  type: string;
  /** Internal type of the parameter (used for complex types) */
  internalType?: string;
  /** Array of components for tuple types */
  components?: AbiParameter[];
  /** Whether the parameter is indexed (for event parameters) */
  indexed?: boolean;
};

/**
 * Represents a function in an Ethereum ABI.
 * This type defines the structure of a smart contract function.
 */
export type AbiFunction = {
  /** Type identifier (always 'function') */
  type: 'function';
  /** Name of the function */
  name: string;
  /** State mutability of the function */
  stateMutability: 'pure' | 'view' | 'nonpayable' | 'payable';
  /** Array of input parameters */
  inputs: AbiParameter[];
  /** Array of output parameters */
  outputs: AbiParameter[];
};

/**
 * Represents an event in an Ethereum ABI.
 * This type defines the structure of a smart contract event.
 */
export type AbiEvent = {
  /** Type identifier (always 'event') */
  type: 'event';
  /** Name of the event */
  name: string;
  /** Array of event parameters */
  inputs: AbiParameter[];
  /** Whether the event is anonymous */
  anonymous: boolean;
};

/**
 * Represents a constructor in an Ethereum ABI.
 * This type defines the structure of a smart contract constructor.
 */
export type AbiConstructor = {
  /** Type identifier (always 'constructor') */
  type: 'constructor';
  /** Array of constructor parameters */
  inputs: AbiParameter[];
  /** State mutability of the constructor */
  stateMutability: 'nonpayable' | 'payable';
};

/**
 * Represents a fallback function in an Ethereum ABI.
 * This type defines the structure of a smart contract fallback function.
 */
export type AbiFallback = {
  /** Type identifier (always 'fallback') */
  type: 'fallback';
  /** State mutability of the fallback function */
  stateMutability: 'nonpayable' | 'payable';
};

/**
 * Represents a complete Ethereum ABI.
 * This type is an array of function, event, constructor, and fallback definitions.
 */
export type EthereumAbi = Array<AbiFunction | AbiConstructor | AbiEvent | AbiFallback>;
