package oneshot

import (
	"context"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/gen"
	"github.com/antihax/optional"
)

// Wallets handles all wallet-related operations
type Wallets struct {
	api        *swagger.WalletsApiService
	businessId string
}

// List lists wallets for a business
func (w *Wallets) List(ctx context.Context, chainId *swagger.EChain, pageSize, page *int32, name *string) ([]swagger.Wallet, error) {
	opts := &swagger.WalletsApiBusinessBusinessIdWalletsGetOpts{}
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

// Create creates a new wallet for a business
func (w *Wallets) Create(ctx context.Context, chain swagger.EChain, name string, description *string) (*swagger.Wallet, error) {
	body := swagger.BusinessIdWalletsBody{
		ChainId: &chain,
		Name:    name,
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

// Get gets an wallet by ID
func (w *Wallets) Get(ctx context.Context, walletId string, includeBalances *bool) (*swagger.Wallet, error) {
	opts := &swagger.WalletsApiWalletsWalletIdGetOpts{}
	if includeBalances != nil {
		opts.IncludeBalances = optional.NewBool(*includeBalances)
	}

	resp, _, err := w.api.WalletsWalletIdGet(ctx, walletId, opts)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Update updates an wallet
func (w *Wallets) Update(ctx context.Context, walletId string, name, description *string) (*swagger.Wallet, error) {
	body := swagger.WalletsWalletIdBody{}
	if name != nil {
		body.Name = *name
	}
	if description != nil {
		body.Description = *description
	}

	resp, _, err := w.api.WalletsWalletIdPut(ctx, body, walletId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Delete deletes an wallet
func (w *Wallets) Delete(ctx context.Context, walletId string) error {
	_, _, err := w.api.WalletsWalletIdDelete(ctx, walletId)
	return err
}

// Transfer initiates a transfer of native tokens from the wallet
func (w *Wallets) Transfer(ctx context.Context, walletId, destinationAddress string, transferAmount, memo *string) (*swagger.Transaction, error) {
	body := swagger.WalletIdTransferBody{
		DestinationAccountAddress: destinationAddress,
	}
	if transferAmount != nil {
		body.TransferAmount = *transferAmount
	}
	if memo != nil {
		body.Memo = *memo
	}

	resp, _, err := w.api.WalletsWalletIdTransferPost(ctx, body, walletId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// ListDelegations lists delegations for a wallet
func (w *Wallets) ListDelegations(ctx context.Context, walletId string, pageSize, page *int32) ([]swagger.Delegation, error) {
	opts := &swagger.WalletsApiWalletsWalletIdDelegationsGetOpts{}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}

	resp, _, err := w.api.WalletsWalletIdDelegationsGet(ctx, walletId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}

// CreateDelegation creates a new delegation for a wallet
func (w *Wallets) CreateDelegation(ctx context.Context, walletId, delegationData string, startTime, endTime *int64, contractAddresses []string, methods []string) (*swagger.Delegation, error) {
	body := swagger.WalletIdDelegationsBody{
		DelegationData: delegationData,
	}
	if startTime != nil {
		body.StartTime = float64(*startTime)
	}
	if endTime != nil {
		body.EndTime = float64(*endTime)
	}
	if contractAddresses != nil {
		body.ContractAddresses = contractAddresses
	}
	if methods != nil {
		body.Methods = methods
	}

	resp, _, err := w.api.WalletsWalletIdDelegationsPost(ctx, body, walletId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}
