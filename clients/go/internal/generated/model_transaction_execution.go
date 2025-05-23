/*
 * M2M Gateway API
 *
 * The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework
 *
 * API version: 0.1
 * Contact: support@uxly.software
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

// A single execution of a transaction- ie, a function call
type TransactionExecution struct {
	Id string `json:"id"`
	TransactionId string `json:"transactionId"`
	// ID of the API Credential used to execute the transaction. Note, this is not the API Key itself. This will be null if a user initiated the execution and not an API Credential
	ApiCredentialId string `json:"apiCredentialId"`
	// The actual API key used
	ApiKey string `json:"apiKey,omitempty"`
	// The User ID that executed the transaction. This will be null if an API key was used instead of a user token.
	UserId string `json:"userId"`
	Status *ETransactionExecutionStatus `json:"status"`
	// The ID of the actual chain transaction in the internal chain service. This is mostly for debugging purposes.
	ChainTransactionId string `json:"chainTransactionId"`
	// The hash of the transaction. Only calculated once the status is Submitted.
	TransactionHash string `json:"transactionHash"`
	// the name of the associated Transaction. Included as a convienience.
	Name string `json:"name,omitempty"`
	// The functionName of the associated Transaction. Included as a convienience.
	FunctionName string `json:"functionName,omitempty"`
	Chain *EChain `json:"chain,omitempty"`
	// Optional text supplied when the transaction is executed. This can be a note to the user about why the execution was done, or formatted information such as JSON that can be used by the user's system.
	Memo string `json:"memo,omitempty"`
	Completed float64 `json:"completed"`
	Updated float64 `json:"updated"`
	Created float64 `json:"created"`
}
