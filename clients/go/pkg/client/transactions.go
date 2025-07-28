package client

import (
	"context"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/internal/generated"
	"github.com/antihax/optional"
)

// Transactions handles all transaction-related operations
type Transactions struct {
	api        *swagger.TransactionsApiService
	businessId string
}

// Get gets a specific transaction by its ID
func (e *Transactions) Get(ctx context.Context, transactionId string) (*swagger.Transaction, error) {
	resp, _, err := e.api.TransactionsContractMethodIdGet(ctx, transactionId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// List lists transactions for a business with optional filters
func (e *Transactions) List(
	ctx context.Context,
	pageSize, page *int32,
	chainId *swagger.EChain,
	status *string,
	walletId, contractMethodId, apiCredentialId, userId, memo *string,
	createdAfter, createdBefore *int64,
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
	if status != nil {
		opts.Status = optional.NewString(*status)
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
	if memo != nil {
		opts.Memo = optional.NewString(*memo)
	}
	if createdAfter != nil {
		opts.CreatedAfter = optional.NewFloat64(float64(*createdAfter))
	}
	if createdBefore != nil {
		opts.CreatedBefore = optional.NewFloat64(float64(*createdBefore))
	}

	resp, _, err := e.api.BusinessBusinessIdTransactionsGet(ctx, e.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}
