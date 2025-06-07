import { z } from 'zod';
import { newSolidityStructParamSchema, solidityStructParamSchema } from './struct.js';
import { ethereumAbiSchema } from './abi.js';

// Validation for transaction state mutability
export const transactionStateMutabilitySchema = z
  .enum(['nonpayable', 'payable', 'view', 'pure'])
  .describe(
    'The state mutability of a Solidity function. Determines if the function can modify state, receive native tokens, or only read data'
  );

// Validation for transaction status
export const transactionStatusSchema = z
  .enum(['live', 'archived', 'both'])
  .describe(
    'The status of a transaction - live for active transactions, archived for deleted ones, or both. Used for filtering transaction lists'
  );

// Validation for transaction parameters
/**
 * Schema for transaction parameters. This is a recursive schema that can handle nested objects and arrays.
 */
export const transactionParamsSchema: z.ZodType<{
  [key: string]: string | number | boolean | null | undefined | { [key: string]: any } | Array<any>;
}> = z.record(
  z.string(),
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.undefined(),
    z.lazy(() => transactionParamsSchema),
    z.array(z.lazy(() => transactionParamsSchema)),
  ])
);

// Validation for transaction estimate
export const transactionEstimateSchema = z
  .object({
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Determines which blockchain network the transaction will be executed on'
      ),
    contractAddress: z
      .string()
      .describe('The address of the smart contract that contains the function to be called'),
    functionName: z
      .string()
      .describe('The name of the function on the contract that will be called'),
    gasAmount: z
      .string()
      .describe('The estimated amount of gas units the transaction will consume'),
    maxFeePerGas: z
      .string()
      .nullable()
      .describe('The maximum fee per gas unit for EIP-1559 transactions'),
    maxPriorityFeePerGas: z
      .string()
      .nullable()
      .describe('The maximum priority fee per gas unit for EIP-1559 transactions'),
    gasPrice: z.string().nullable().describe('The gas price for legacy transactions'),
  })
  .describe(
    'A summary of values required to estimate the cost of executing a transaction. Used to determine gas fees and transaction costs before execution'
  );

// Validation for transaction update parameters
export const transactionUpdateSchema = z
  .object({
    chain: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Can be updated to change which blockchain network the transaction operates on'
      ),
    contractAddress: z
      .string()
      .optional()
      .describe(
        'The address of the smart contract. Can be updated to point to a different contract'
      ),
    escrowWalletId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the escrow wallet that will execute the transaction. Must be for the same chain as the transaction'
      ),
    name: z
      .string()
      .optional()
      .describe(
        'Name of transaction, used for display purposes and lookup. Helps identify the transaction in lists and logs'
      ),
    description: z
      .string()
      .optional()
      .describe(
        'Description of transaction, including details about what it does and when it should be called. Useful for documentation and understanding transaction purpose'
      ),
    functionName: z
      .string()
      .optional()
      .describe(
        'The actual method name on the smart contract. Solidity names are case sensitive and must match precisely. Cannot be changed after creation'
      ),
    payable: z
      .boolean()
      .optional()
      .describe(
        'Whether the transaction can receive native tokens. Determines if the function can accept ETH or other native tokens'
      ),
    nativeTransaction: z
      .boolean()
      .optional()
      .describe(
        'Whether this is a native transaction (not a smart contract call). Used for direct blockchain transactions without contract interaction'
      ),
    callbackUrl: z
      .string()
      .url()
      .nullable()
      .optional()
      .describe(
        'The URL to send webhooks to when this transaction is executed. Must be a valid HTTP or HTTPS URL with protocol. Used for transaction status notifications'
      ),
  })
  .describe(
    'Parameters that can be updated for an existing transaction. Allows modification of transaction properties while maintaining its core functionality'
  );

// Validation for transaction
export const transactionSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .describe('Internal ID of the transaction object. Unique identifier for the transaction'),
    businessId: z
      .string()
      .uuid()
      .describe(
        'The business that owns this transaction. Used for access control and organization'
      ),
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Determines which blockchain network the transaction operates on'
      ),
    contractAddress: z
      .string()
      .describe('The address of the smart contract that contains the function to be called'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe(
        'The default escrow wallet that will execute this Transaction. Must be for the same chain as the transaction'
      ),
    name: z
      .string()
      .describe(
        'Name of transaction, used for display purposes and lookup. Helps identify the transaction in lists and logs'
      ),
    description: z
      .string()
      .describe(
        'Description of transaction, including details about what it does and when it should be called. Useful for documentation and understanding transaction purpose'
      ),
    functionName: z
      .string()
      .describe(
        'The actual method name on the smart contract. Solidity names are case sensitive and must match precisely. Defines which function will be called'
      ),
    inputs: z
      .array(solidityStructParamSchema)
      .describe(
        'The input parameters for the transaction function. Defines the structure and types of parameters required for execution'
      ),
    outputs: z
      .array(solidityStructParamSchema)
      .describe(
        'The output parameters for the transaction function. Defines the structure and types of values returned after execution'
      ),
    stateMutability: transactionStateMutabilitySchema,
    contractDescriptionId: z
      .string()
      .uuid()
      .nullable()
      .describe(
        'The ID of the contract description that this transaction was created from. This is optional, and a Transaction can drift from the original Contract Description but retain this association'
      ),
    callbackUrl: z
      .string()
      .url()
      .nullable()
      .describe(
        'The current destination for webhooks to be sent when this transaction is executed. Will be null if no webhook is assigned. Used for transaction status notifications'
      ),
    publicKey: z
      .string()
      .base64()
      .nullable()
      .describe(
        'The current public key for verifying the integrity of the webhook when this transaction is executed. 1Shot will sign its webhooks with a private key and provide a signature for the webhook that can be validated with this key. It will be null if there is no webhook destination specified'
      ),
    updated: z
      .number()
      .describe(
        'Unix timestamp of when the transaction was last updated. Used for tracking changes'
      ),
    created: z
      .number()
      .describe(
        'Unix timestamp of when the transaction was created. Used for tracking creation time'
      ),
  })
  .describe(
    'A single defined transaction, corresponding a method call on a smart contract on a chain. You can have multiple Transactions defined for the same method in the contract if you want to use different setups for static parameters. Transactions are sometimes referred to as Endpoints'
  );

// Validation for transaction list response
export const transactionListSchema = z
  .object({
    response: z
      .array(transactionSchema)
      .describe('The list of transactions matching the query parameters'),
    page: z
      .number()
      .int()
      .positive()
      .describe('Which page of results this is (1-indexed). Used for pagination'),
    pageSize: z
      .number()
      .int()
      .positive()
      .describe('The number of results per page. Determines how many transactions are returned'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('The total number of results available across all pages'),
  })
  .describe(
    'A paginated list of transactions. Used for retrieving multiple transactions with pagination support'
  );

// Validation for listing transactions
export const listTransactionsSchema = z
  .object({
    businessId: z
      .string()
      .uuid()
      .describe('The business ID to list transactions for. Used for access control and filtering'),
    pageSize: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('Number of items per page. Optional parameter for pagination control'),
    page: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('Page number (1-indexed). Optional parameter for pagination control'),
    chainId: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'Filter by chain ID. Optional parameter to get transactions for a specific blockchain'
      ),
    name: z
      .string()
      .optional()
      .describe(
        'Filter by transaction name. Optional parameter for searching transactions by name'
      ),
    status: z
      .enum(['live', 'archived', 'both'])
      .optional()
      .describe(
        'Filter by transaction status - live for active transactions, archived for deleted ones, or both. Optional parameter for filtering by status'
      ),
    contractAddress: z
      .string()
      .optional()
      .describe(
        'Filter by contract address. Optional parameter to get transactions for a specific contract'
      ),
    contractDescriptionId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Filter by contract description ID. If provided, only transactions created from this Contract Description will be returned'
      ),
  })
  .describe('Parameters for listing transactions. Used to filter and paginate transaction lists');

// Validation for ERC7702Authorization
export const erc7702AuthorizationSchema = z
  .object({
    address: z
      .string()
      .describe('The contract address that is being authorized to act on behalf of the EOA'),
    nonce: z
      .string()
      .describe(
        'The delegation nonce. This starts at 0 and must be positive. The EOA must keep track of this nonce itself'
      ),
    chainId: z.number().int().positive().describe('The chain ID where the authorization is valid'),
    signature: z
      .string()
      .regex(/^0x[a-fA-F0-9]+$/)
      .describe(
        'The signature of the authorization, from the EOA that is delegating the authorization to the contract at address'
      ),
  })
  .describe(
    'A single authorization for an ERC-7702 transaction. It represents a single potential delegation from an EOA to a contract'
  );

// Validation for executing a transaction
export const executeTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to execute. Identifies which transaction to run'),
    params: transactionParamsSchema,
    escrowWalletId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the escrow wallet that will execute the transaction. If not provided, the default escrow wallet for the transaction will be used'
      ),
    memo: z
      .string()
      .optional()
      .describe(
        "Optional text supplied when the transaction is executed. This can be a note to the user about why the execution was done, or formatted information such as JSON that can be used by the user's system"
      ),
    authorizationList: z
      .array(erc7702AuthorizationSchema)
      .optional()
      .describe(
        'A list of authorizations for the transaction. If you are using ERC-7702, you must provide at least one authorization'
      ),
  })
  .describe(
    'Parameters required to execute a transaction. Includes the function parameters, optional escrow wallet override, and optional memo'
  );

// Validation for testing a transaction
export const testTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to test. Identifies which transaction to simulate'),
    params: transactionParamsSchema,
  })
  .describe(
    'Parameters for testing a transaction - simulates execution without spending gas or changing on-chain state. Used for validating transaction parameters before actual execution'
  );

// Validation for getting a transaction
export const getTransactionSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .describe('The ID of the transaction to get. Identifies which transaction to retrieve'),
  })
  .describe(
    'Parameters for getting a transaction. Used to retrieve a single transaction by its ID'
  );

// Validation for estimating a transaction
export const estimateTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to estimate. Identifies which transaction to analyze'),
    params: transactionParamsSchema,
    escrowWalletId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Optional ID of the escrow wallet to use. Overrides the default escrow wallet if specified'
      ),
  })
  .describe(
    'Parameters for estimating a transaction - returns data about fees and gas amount. Used to calculate transaction costs before execution'
  );

// Validation for reading a transaction
export const readTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to read. Identifies which transaction to query'),
    params: transactionParamsSchema,
  })
  .describe(
    'Parameters for reading a transaction - gets result of view or pure function. Used for reading blockchain state without making changes'
  );

// Validation for creating a transaction
export const createTransactionSchema = z
  .object({
    businessId: z
      .string()
      .uuid()
      .describe(
        'The business ID to create the transaction for. Used for access control and organization'
      ),
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Determines which blockchain network the transaction will operate on'
      ),
    contractAddress: z
      .string()
      .describe('The address of the smart contract that contains the function to be called'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe(
        'The ID of the escrow wallet that will execute the transaction. This escrow wallet must be for the same chain as the transaction you are creating'
      ),
    name: z
      .string()
      .describe(
        'Name of transaction, used for display purposes and lookup. Helps identify the transaction in lists and logs'
      ),
    description: z
      .string()
      .describe(
        'Description of transaction, including details about what it does and when it should be called. Useful for documentation and understanding transaction purpose'
      ),
    functionName: z
      .string()
      .describe(
        'The actual method name on the smart contract. Solidity names are case sensitive and must match precisely. Defines which function will be called'
      ),
    stateMutability: transactionStateMutabilitySchema,
    inputs: z
      .array(newSolidityStructParamSchema)
      .describe(
        'The input parameters for the transaction function. Defines the structure and types of parameters required for execution'
      ),
    outputs: z
      .array(newSolidityStructParamSchema)
      .describe(
        'The output parameters for the transaction function. Defines the structure and types of values returned after execution'
      ),
    callbackUrl: z
      .string()
      .url()
      .optional()
      .nullable()
      .describe(
        'The URL to send webhooks to when this transaction is executed. This must be a valid HTTP or HTTPS URL and include the protocol. Used for transaction status notifications'
      ),
  })
  .describe(
    'Parameters for creating a new Transaction. A Transaction is sometimes referred to as an Endpoint. A Transaction corresponds to a single method on a smart contract, and most of the required information to create one can be pulled from an Ethereum ABI. Transactions can be configured with static values for input parameters, which is useful for controlling how the transaction is called'
  );

// Validation for importing transactions from ABI
export const importFromABISchema = z
  .object({
    businessId: z.string().uuid().describe('The ID of the business that owns the transaction'),
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Determines which blockchain network the transaction will be executed on'
      ),
    contractAddress: z
      .string()
      .describe('The address of the smart contract that contains the function to be called'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe(
        'The ID of the escrow wallet that will execute the transaction. Must be for the same chain as the transaction'
      ),
    abi: ethereumAbiSchema,
    name: z
      .string()
      .optional()
      .describe("The name of the smart contract, if it doesn't already exist"),
    description: z
      .string()
      .optional()
      .describe("A description of the smart contract, if it doesn't already exist"),
    tags: z.array(z.string()).optional().describe('Tags to add to the smart contract'),
  })
  .describe(
    'Parameters for importing transactions from an Ethereum ABI. Creates transactions for each function in the ABI'
  );

// Validation for updating a transaction
export const updateTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to update. Identifies which transaction to modify'),
    params: transactionUpdateSchema,
  })
  .describe(
    'Parameters for updating a transaction. Used to modify existing transaction properties'
  );

// Validation for deleting a transaction
export const deleteTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe('The ID of the transaction to delete. Identifies which transaction to remove'),
  })
  .describe('Parameters for deleting a transaction. Used to remove a transaction from the system');

// Validation for restoring a transaction
export const restoreTransactionSchema = z
  .object({
    transactionId: z
      .string()
      .uuid()
      .describe(
        'The ID of the transaction to restore. Identifies which deleted transaction to recover'
      ),
  })
  .describe(
    'Parameters for restoring a transaction - undeletes transaction objects. Used to recover previously deleted transactions'
  );

// Validation for contract function parameter description
export const contractFunctionParamDescriptionSchema = z
  .object({
    index: z.number().int().nonnegative().describe('The index of the parameter. Starts at 0'),
    name: z
      .string()
      .describe(
        'The name of the parameter, as defined in the Solidity contract. Input parameters are required to have names; this may be blank for output parameters'
      ),
    description: z
      .string()
      .describe(
        'A description of the parameter and its purpose. These descriptions are provided by either humans or AI and are intended for AI agent consumption'
      ),
    tags: z
      .array(z.string())
      .describe('An array of tag names associated with the function parameter'),
  })
  .describe('A description of a function parameter. This may be an input or an output parameter');

// Validation for contract function description
export const contractFunctionDescriptionSchema = z
  .object({
    name: z
      .string()
      .describe(
        'The name of the function. This has to exactly match the name of the function in the Solidity contract, including the case and whitespace'
      ),
    description: z
      .string()
      .describe(
        'A human provided description of the function, what it does, and a basic overview of its parameters'
      ),
    tags: z.array(z.string()).describe('An array of tag names provided to the contract function'),
    inputs: z
      .array(contractFunctionParamDescriptionSchema)
      .describe(
        'An array of input parameters for the function. All inputs are required to be named'
      ),
    outputs: z
      .array(contractFunctionParamDescriptionSchema)
      .describe(
        'An array of input parameters for the function. All inputs are required to be named'
      ),
  })
  .describe('The description of a single function on a contract');

// Validation for contract description
export const contractDescriptionSchema = z
  .object({
    id: z.string().uuid().describe('internal ID of the contract description'),
    userId: z.string().uuid().describe('ID of the user that created'),
    chain: z.number().int().positive().describe('The ChainId of a supported chain on 1Shot API'),
    contractAddress: z.string().describe('The address of the smart contract'),
    name: z
      .string()
      .describe(
        'The name of the contract. This is human provided and has no technical significance'
      ),
    description: z
      .string()
      .describe(
        'The human provided description of what the contract is and does, and the top level'
      ),
    tags: z.array(z.string()).describe('An array of tag names provided to the contract'),
    updated: z
      .number()
      .describe('Unix timestamp of when the contract description was last updated'),
    created: z.number().describe('Unix timestamp of when the contract description was created'),
  })
  .describe('A description of a contract, designed to be used for contract discovery by AI agents');

// Validation for full contract description
export const fullContractDescriptionSchema = contractDescriptionSchema
  .extend({
    functions: z
      .array(contractFunctionDescriptionSchema)
      .describe(
        'An array of Contract Function Descriptions, describing each function on the contract'
      ),
  })
  .describe('A description of a smart contract, including all functions and parameters');

// Validation for contract search request
export const contractSearchSchema = z
  .object({
    query: z
      .string()
      .describe(
        'A free-form query to search for contracts. This uses semantic search to find the most relevant contracts.'
      ),
    chain: z
      .number()
      .int()
      .positive()
      .optional()
      .describe('The ChainId of a supported chain on 1Shot API'),
  })
  .describe('Parameters for searching contract descriptions');

// Validation for contract transactions request
export const contractTransactionsSchema = z
  .object({
    businessId: z
      .string()
      .uuid()
      .describe(
        'The business ID to create the transactions for. Used for access control and organization'
      ),
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'The ChainId of a supported chain on 1Shot API. Determines which blockchain network the transactions will operate on'
      ),
    contractAddress: z
      .string()
      .describe('The address of the smart contract that contains the functions to be imported'),
    escrowWalletId: z
      .string()
      .uuid()
      .describe(
        'The ID of the escrow wallet that will execute the transactions. Must be for the same chain as the transactions'
      ),
    contractDescriptionId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'The ID of the contract description that you want to use. If not provided, the highest-ranked Contract Description for the chain and contract address will be used. This is optional, and a Transaction can drift from the original Contract Description but retain this association'
      ),
  })
  .describe(
    'Parameters for creating transactions from a contract description. This is based on the verified contract ABI and the highest-ranked Contract Description.'
  );

// Validation for transaction test result
export const transactionTestResultSchema = z
  .object({
    success: z.boolean().describe('Whether or not the transaction would run successfully'),
    result: z
      .record(z.any())
      .nullable()
      .describe(
        'The result returned by the transaction, if it was successful. When running a test, no changes are made on the blockchain, so these results are hypothetical'
      ),
    error: z
      .record(z.any())
      .nullable()
      .describe('The error that occurred, if the transaction was not successful'),
  })
  .describe('The result of running /test on a transaction');
