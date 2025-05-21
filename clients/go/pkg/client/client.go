package client

import (
	"context"

	swagger "github.com/1shotapi/go-client/internal/generated"
	"github.com/antihax/optional"
)

type Client struct {
	api *swagger.APIClient
}

// NewClient creates a new client with the given API key
func NewClient(apiKey string) *Client {
	cfg := swagger.NewConfiguration()
	cfg.AddDefaultHeader("Authorization", "Bearer "+apiKey)
	return &Client{
		api: swagger.NewAPIClient(cfg),
	}
}

// Transactions returns a new Transactions client
func (c *Client) Transactions() *TransactionsClient {
	return &TransactionsClient{
		api: c.api.TransactionApi,
	}
}

// TransactionsClient handles all transaction-related operations
type TransactionsClient struct {
	api *swagger.TransactionApiService
}

// ListTransactionsParams contains optional parameters for listing transactions
type ListTransactionsParams struct {
	PageSize        *int32
	Page            *int32
	ChainId         *swagger.EChain
	Name            *string
	Status          *swagger.EDeletedStatusSelector
	ContractAddress *string
}

// List returns a list of transactions
func (c *TransactionsClient) List(ctx context.Context, params *ListTransactionsParams) ([]swagger.Transaction, error) {
	opts := &swagger.TransactionApiBusinessBusinessIdTransactionsGetOpts{}
	if params != nil {
		if params.PageSize != nil {
			opts.PageSize = optional.NewInterface(*params.PageSize)
		}
		if params.Page != nil {
			opts.Page = optional.NewInterface(*params.Page)
		}
		if params.ChainId != nil {
			opts.ChainId = optional.NewInterface(*params.ChainId)
		}
		if params.Name != nil {
			opts.Name = optional.NewString(*params.Name)
		}
		if params.Status != nil {
			opts.Status = optional.NewInterface(*params.Status)
		}
		if params.ContractAddress != nil {
			opts.ContractAddress = optional.NewInterface(*params.ContractAddress)
		}
	}

	// TODO: Get business ID from configuration or context
	businessId := "your-business-id"
	resp, _, err := c.api.BusinessBusinessIdTransactionsGet(ctx, businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}

// Add ergonomic methods here that use c.api
