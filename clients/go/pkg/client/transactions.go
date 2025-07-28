package client

import (
	"context"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/internal/generated"
	"github.com/antihax/optional"
)

// Transactions handles all transaction execution-related operations
type Transactions struct {
	api        *swagger.TransactionsApiService
	businessId string
}

// Get gets a specific transaction execution by its ID
func (e *Transactions) Get(ctx context.Context, executionId string) (*swagger.Transaction, error) {
	resp, _, err := e.api.TransactionsContractMethodIdGet(ctx, executionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// List lists transaction executions for a business with optional filters
func (e *Transactions) List(
	ctx context.Context,
	pageSize, page *int32,
	chainId *swagger.EChain,
	walletId, contractMethodId, apiCredentialId, userId *string,
) ([]swagger.Transaction, error) {
	opts := &swagger.TransactionsApiBusinessBusinessIdTransactionsGetOpts{}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}
	if chainId != nil {
		opts.ChainId = optional.NewInterface(*chainId)
	}
	if walletId != nil {
		opts.WalletId = optional.NewInterface(*walletId)
	}
	if contractMethodId != nil {
		opts.ContractMethodId = optional.NewInterface(*contractMethodId)
	}
	if apiCredentialId != nil {
		opts.ApiCredentialId = optional.NewInterface(*apiCredentialId)
	}
	if userId != nil {
		opts.UserId = optional.NewInterface(*userId)
	}

	resp, _, err := e.api.BusinessBusinessIdTransactionsGet(ctx, e.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}
