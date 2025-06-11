package client

import (
	"context"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/internal/generated"
	"github.com/antihax/optional"
)

// Executions handles all transaction execution-related operations
type Executions struct {
	api        *swagger.TransactionExecutionApiService
	businessId string
}

// Get gets a specific transaction execution by its ID
func (e *Executions) Get(ctx context.Context, executionId string) (*swagger.TransactionExecution, error) {
	resp, _, err := e.api.ExecutionsTransactionExecutionIdGet(ctx, executionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// List lists transaction executions for a business with optional filters
func (e *Executions) List(
	ctx context.Context,
	pageSize, page *int32,
	chainId *swagger.EChain,
	status *int32,
	escrowWalletId, transactionId, apiCredentialId, userId *string,
) ([]swagger.TransactionExecution, error) {
	opts := &swagger.TransactionExecutionApiBusinessBusinessIdTransactionsExecutionsGetOpts{}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}
	if chainId != nil {
		opts.ChainId = optional.NewInterface(*chainId)
	}
	if status != nil {
		opts.Status = optional.NewInt32(*status)
	}
	if escrowWalletId != nil {
		opts.EscrowWalletId = optional.NewInterface(*escrowWalletId)
	}
	if transactionId != nil {
		opts.TransactionId = optional.NewInterface(*transactionId)
	}
	if apiCredentialId != nil {
		opts.ApiCredentialId = optional.NewInterface(*apiCredentialId)
	}
	if userId != nil {
		opts.UserId = optional.NewInterface(*userId)
	}

	resp, _, err := e.api.BusinessBusinessIdTransactionsExecutionsGet(ctx, e.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}
