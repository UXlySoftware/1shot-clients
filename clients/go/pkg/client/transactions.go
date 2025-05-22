package client

import (
	"context"

	swagger "github.com/1shotapi/go-client/internal/generated"
	"github.com/antihax/optional"
)

// Transactions handles all transaction-related operations
type Transactions struct {
	api        *swagger.TransactionApiService
	businessId string
}

// Execute executes a transaction
func (t *Transactions) Execute(ctx context.Context, transactionId string, params map[string]interface{}, escrowWalletId, memo *string) (*swagger.TransactionExecution, error) {
	body := swagger.TransactionIdExecuteBody{}
	if params != nil {
		obj := swagger.Object(params)
		body.Params = &obj
	}
	if escrowWalletId != nil {
		body.EscrowWalletId = *escrowWalletId
	}
	if memo != nil {
		body.Memo = *memo
	}
	resp, _, err := t.api.TransactionsTransactionIdExecutePost(ctx, body, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Test tests a transaction without executing it
func (t *Transactions) Test(ctx context.Context, transactionId string, params map[string]interface{}) (*swagger.TransactionTestResult, error) {
	body := swagger.TransactionIdTestBody{}
	if params != nil {
		obj := swagger.Object(params)
		body.Params = &obj
	}
	resp, _, err := t.api.TransactionsTransactionIdTestPost(ctx, body, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Get gets a transaction by ID
func (t *Transactions) Get(ctx context.Context, id string) (*swagger.Transaction, error) {
	resp, _, err := t.api.TransactionsTransactionIdGet(ctx, id)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// List lists transactions for a business
func (t *Transactions) List(ctx context.Context, pageSize, page *int32, chainId *swagger.EChain, name *string, status *swagger.EDeletedStatusSelector, contractAddress *string) ([]swagger.Transaction, error) {
	opts := &swagger.TransactionApiBusinessBusinessIdTransactionsGetOpts{}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}
	if chainId != nil {
		opts.ChainId = optional.NewInterface(*chainId)
	}
	if name != nil {
		opts.Name = optional.NewString(*name)
	}
	if status != nil {
		opts.Status = optional.NewInterface(*status)
	}
	if contractAddress != nil {
		opts.ContractAddress = optional.NewInterface(*contractAddress)
	}
	resp, _, err := t.api.BusinessBusinessIdTransactionsGet(ctx, t.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}

// Estimate estimates the cost of executing a transaction
func (t *Transactions) Estimate(ctx context.Context, transactionId string, params map[string]interface{}, escrowWalletId *string) (*swagger.TransactionEstimate, error) {
	body := swagger.TransactionIdEstimateBody{}
	if params != nil {
		obj := swagger.Object(params)
		body.Params = &obj
	}
	if escrowWalletId != nil {
		body.EscrowWalletId = *escrowWalletId
	}
	resp, _, err := t.api.TransactionsTransactionIdEstimatePost(ctx, body, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Read reads the result of a view or pure function
func (t *Transactions) Read(ctx context.Context, transactionId string, params map[string]interface{}) (*swagger.Object, error) {
	body := swagger.TransactionIdReadBody{}
	if params != nil {
		obj := swagger.Object(params)
		body.Params = &obj
	}
	resp, _, err := t.api.TransactionsTransactionIdReadPost(ctx, body, transactionId)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// Create creates a new transaction
func (t *Transactions) Create(
	ctx context.Context,
	chain swagger.EChain,
	contractAddress string,
	escrowWalletId string,
	name string,
	description string,
	functionName string,
	stateMutability swagger.ESolidityStateMutability,
	inputs []swagger.NewSolidityStructParam,
	outputs []swagger.NewSolidityStructParam,
	callbackUrl *string,
) (*swagger.Transaction, error) {
	body := swagger.BusinessIdTransactionsBody{
		Chain:           &chain,
		ContractAddress: contractAddress,
		EscrowWalletId:  escrowWalletId,
		Name:            name,
		Description:     description,
		FunctionName:    functionName,
		StateMutability: &stateMutability,
		Inputs:          inputs,
		Outputs:         outputs,
	}
	if callbackUrl != nil {
		body.CallbackUrl = *callbackUrl
	}
	resp, _, err := t.api.BusinessBusinessIdTransactionsPost(ctx, body, t.businessId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// ImportFromABI imports transactions from an ABI
func (t *Transactions) ImportFromABI(
	ctx context.Context,
	chain swagger.EChain,
	contractAddress string,
	escrowWalletId string,
	name string,
	description string,
	abi swagger.Object,
) ([]swagger.Transaction, error) {
	body := swagger.TransactionsAbiBody{
		Chain:           &chain,
		ContractAddress: contractAddress,
		EscrowWalletId:  escrowWalletId,
		Name:            name,
		Description:     description,
		Abi:             abi,
	}
	resp, _, err := t.api.BusinessBusinessIdTransactionsAbiPost(ctx, body, t.businessId)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// Update updates a transaction
func (t *Transactions) Update(
	ctx context.Context,
	transactionId string,
	chain *swagger.EChain,
	contractAddress, escrowWalletId, name, description, functionName, callbackUrl *string,
	payable, nativeTransaction *bool,
) (*swagger.Transaction, error) {
	body := swagger.TransactionsTransactionIdBody{
		Chain:             chain,
		ContractAddress:   contractAddress,
		EscrowWalletId:    escrowWalletId,
		Name:              name,
		Description:       description,
		FunctionName:      functionName,
		Payable:           payable,
		NativeTransaction: nativeTransaction,
		CallbackUrl:       callbackUrl,
	}
	resp, _, err := t.api.TransactionsTransactionIdPut(ctx, body, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Delete deletes a transaction
func (t *Transactions) Delete(ctx context.Context, transactionId string) error {
	_, err := t.api.TransactionsTransactionIdDelete(ctx, transactionId)
	return err
}

// Restore restores a deleted transaction
func (t *Transactions) Restore(ctx context.Context, transactionId string) (*swagger.Transaction, error) {
	resp, _, err := t.api.TransactionsTransactionIdRestorePut(ctx, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}
