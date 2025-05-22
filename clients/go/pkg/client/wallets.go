package client

import (
	"context"

	swagger "github.com/1shotapi/go-client/internal/generated"
	"github.com/antihax/optional"
)

// Wallets handles all wallet-related operations
type Wallets struct {
	api        *swagger.EscrowWalletsApiService
	businessId string
}

// List lists escrow wallets for a business
func (w *Wallets) List(ctx context.Context, chainId *swagger.EChain, pageSize, page *int32, name *string) ([]swagger.EscrowWallet, error) {
	opts := &swagger.EscrowWalletsApiBusinessBusinessIdWalletsGetOpts{}
	if chainId != nil {
		opts.ChainId = optional.NewInterface(*chainId)
	}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}
	if name != nil {
		opts.Name = optional.NewString(*name)
	}

	resp, _, err := w.api.BusinessBusinessIdWalletsGet(ctx, w.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}

// Create creates a new escrow wallet for a business
func (w *Wallets) Create(ctx context.Context, chain swagger.EChain, name string, description *string) (*swagger.EscrowWallet, error) {
	body := swagger.BusinessIdWalletsBody{
		Chain: &chain,
		Name:  name,
	}
	if description != nil {
		body.Description = *description
	}

	resp, _, err := w.api.BusinessBusinessIdWalletsPost(ctx, body, w.businessId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Get gets an escrow wallet by ID
func (w *Wallets) Get(ctx context.Context, escrowWalletId string, includeBalances *bool) (*swagger.EscrowWallet, error) {
	opts := &swagger.EscrowWalletsApiWalletsEscrowWalletIdGetOpts{}
	if includeBalances != nil {
		opts.IncludeBalances = optional.NewBool(*includeBalances)
	}

	resp, _, err := w.api.WalletsEscrowWalletIdGet(ctx, escrowWalletId, opts)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Update updates an escrow wallet
func (w *Wallets) Update(ctx context.Context, escrowWalletId string, name, description *string) (*swagger.EscrowWallet, error) {
	body := swagger.WalletsEscrowWalletIdBody{}
	if name != nil {
		body.Name = *name
	}
	if description != nil {
		body.Description = *description
	}

	resp, _, err := w.api.WalletsEscrowWalletIdPut(ctx, body, escrowWalletId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Delete deletes an escrow wallet
func (w *Wallets) Delete(ctx context.Context, escrowWalletId string) error {
	_, _, err := w.api.WalletsEscrowWalletIdDelete(ctx, escrowWalletId)
	return err
}
