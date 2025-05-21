import { z } from 'zod';

// Validation for transaction execution status
export const transactionExecutionStatusSchema = z
  .enum(['Submitted', 'Completed', 'Retrying', 'Failed'])
  .describe(
    'The current status of a transaction execution. Tracks the lifecycle of a transaction from submission to completion or failure. Used for monitoring and error handling'
  );

// Validation for transaction execution
export const transactionExecutionSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .describe(
        'Internal ID of the transaction execution. Unique identifier for tracking the execution lifecycle'
      ),
    transactionId: z
      .string()
      .uuid()
      .describe(
        'ID of the transaction being executed. Links to the transaction definition that was executed'
      ),
    apiCredentialId: z
      .string()
      .uuid()
      .nullable()
      .describe(
        'ID of the API credential used for execution, if any. Identifies which API key was used to execute the transaction. Will be null if executed by a user'
      ),
    apiKey: z
      .string()
      .nullable()
      .describe(
        'API key used for execution, if any. The actual API key that was used. Will be null if executed by a user'
      ),
    userId: z
      .string()
      .uuid()
      .nullable()
      .describe(
        'ID of the user who initiated the execution, if any. Identifies which user executed the transaction. Will be null if executed via API'
      ),
    status: transactionExecutionStatusSchema,
    chainTransactionId: z
      .string()
      .uuid()
      .nullable()
      .describe(
        'ID of the transaction on the blockchain, if available. Internal reference to the chain service transaction. Used for debugging and tracking'
      ),
    transactionHash: z
      .string()
      .nullable()
      .describe(
        'Hash of the transaction on the blockchain, if available. The actual blockchain transaction hash. Only available after status is Submitted'
      ),
    name: z
      .string()
      .describe(
        'Name of the transaction being executed. Included for convenience and display purposes'
      ),
    functionName: z
      .string()
      .describe('Name of the function being called. Included for convenience and display purposes'),
    chain: z
      .number()
      .int()
      .positive()
      .describe(
        'ID of the blockchain network where the transaction is executed. Determines which blockchain the transaction was sent to'
      ),
    memo: z
      .string()
      .nullable()
      .describe(
        'Optional memo or note about the transaction execution. Can contain user-provided text or formatted data about why the execution was done'
      ),
    completed: z
      .number()
      .nullable()
      .describe(
        'Unix timestamp when the execution completed, if applicable. Used for tracking execution duration and timing'
      ),
    updated: z
      .number()
      .describe('Unix timestamp of the last update to this execution. Used for tracking changes'),
    created: z
      .number()
      .describe('Unix timestamp when this execution was created. Used for tracking creation time'),
    deleted: z
      .boolean()
      .describe('Whether this execution has been deleted. Used for soft deletion and filtering'),
  })
  .describe(
    'A record of a transaction execution attempt. Represents a single execution of a transaction on the blockchain, including its status, parameters, and results. Used for tracking and monitoring transaction execution lifecycle'
  );

// Validation for transaction execution list response
export const transactionExecutionListSchema = z
  .object({
    response: z
      .array(transactionExecutionSchema)
      .describe('List of transaction executions matching the query parameters'),
    page: z
      .number()
      .int()
      .positive()
      .describe('Current page number in the paginated results (1-indexed)'),
    pageSize: z
      .number()
      .int()
      .positive()
      .describe('Number of items per page. Determines how many executions are returned'),
    totalResults: z
      .number()
      .int()
      .nonnegative()
      .describe('Total number of results available across all pages'),
  })
  .describe(
    'Paginated list of transaction executions. Used for retrieving multiple transaction executions with pagination support'
  );

// Validation for get transaction execution parameters
export const getTransactionExecutionSchema = z
  .object({
    executionId: z
      .string()
      .uuid()
      .describe(
        'Execution ID of the specific transaction execution to retrieve. Identifies which execution to fetch'
      ),
  })
  .describe(
    'Parameters for retrieving a specific transaction execution. Used to get detailed information about a single execution'
  );

// Validation for list transaction executions parameters
export const listTransactionExecutionsSchema = z
  .object({
    businessId: z
      .string()
      .uuid()
      .describe('ID of the business to list executions for. Used for access control and filtering'),
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
      .describe('Page number to retrieve (1-indexed). Optional parameter for pagination control'),
    chainId: z
      .number()
      .int()
      .positive()
      .optional()
      .describe(
        'Filter executions by blockchain network ID. Optional parameter to get executions for a specific chain'
      ),
    status: z
      .enum(['0', '1', '2', '3', '4'])
      .optional()
      .describe(
        'Filter executions by status (Pending = 0, Submitted = 1, Completed = 2,	Retrying = 3,	Failed = 4). Optional parameter to filter by execution state'
      ),
    escrowWalletId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Filter executions by escrow wallet ID. Optional parameter to get executions for a specific wallet'
      ),
    transactionId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Filter executions by transaction ID. Optional parameter to get executions of a specific transaction'
      ),
    apiCredentialId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Filter executions by API credential ID. Optional parameter to get executions made with a specific API key'
      ),
    userId: z
      .string()
      .uuid()
      .optional()
      .describe(
        'Filter executions by user ID. Optional parameter to get executions made by a specific user'
      ),
  })
  .describe(
    'Parameters for listing transaction executions. Used to filter and paginate execution lists with various criteria'
  );
