package client

import (
	"context"
	"fmt"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/internal/generated"
)

// Client represents a 1Shot API client
type Client struct {
	api             *swagger.APIClient
	businessId      string
	accessToken     string
	baseURL         string
	contractMethods *ContractMethods
	wallets         *Wallets
	transactions    *Transactions
	structs         *Structs
}

// ClientConfig holds the configuration for creating a new client
type ClientConfig struct {
	ClientID     string
	ClientSecret string
	BusinessID   string
	BaseURL      string // Optional, defaults to production URL
}

// NewClient creates a new client with the given configuration
func NewClient(cfg ClientConfig) (*Client, error) {
	// Create base configuration
	apiCfg := swagger.NewConfiguration()
	if cfg.BaseURL != "" {
		apiCfg.BasePath = cfg.BaseURL
	}

	// Create API client
	apiClient := swagger.NewAPIClient(apiCfg)

	// Create our client
	c := &Client{
		api:        apiClient,
		businessId: cfg.BusinessID,
		baseURL:    cfg.BaseURL,
	}

	// Initialize categories first
	c.contractMethods = &ContractMethods{
		api:        apiClient.ContractMethodsApi,
		businessId: cfg.BusinessID,
	}
	c.wallets = &Wallets{
		api:        apiClient.WalletsApi,
		businessId: cfg.BusinessID,
	}
	c.transactions = &Transactions{
		api:        apiClient.TransactionsApi,
		businessId: cfg.BusinessID,
	}
	c.structs = &Structs{
		api:        apiClient.SolidityStructsApi,
		businessId: cfg.BusinessID,
	}

	// Get initial access token after everything is initialized
	if err := c.refreshToken(cfg.ClientID, cfg.ClientSecret); err != nil {
		return nil, fmt.Errorf("failed to get initial access token: %w", err)
	}

	return c, nil
}

// refreshToken gets a new access token using client credentials
func (c *Client) refreshToken(clientID, clientSecret string) error {
	// Make the token request
	resp, _, err := c.api.AuthenticationApi.GetAccessToken(
		context.Background(),
		"client_credentials",
		clientID,
		clientSecret,
	)
	if err != nil {
		return fmt.Errorf("token request failed: %w", err)
	}

	// Store the token
	c.accessToken = resp.AccessToken

	// Create new configuration with the token
	apiCfg := swagger.NewConfiguration()
	if c.baseURL != "" {
		apiCfg.BasePath = c.baseURL
	}
	apiCfg.AddDefaultHeader("Authorization", "Bearer "+c.accessToken)

	// Create new API client
	c.api = swagger.NewAPIClient(apiCfg)

	// Update category clients
	c.contractMethods.api = c.api.ContractMethodsApi
	c.wallets.api = c.api.WalletsApi
	c.transactions.api = c.api.TransactionsApi
	c.structs.api = c.api.SolidityStructsApi

	return nil
}

// ContractMethods returns the transactions category client
func (c *Client) ContractMethods() *ContractMethods {
	return c.contractMethods
}

// Wallets returns the wallets category client
func (c *Client) Wallets() *Wallets {
	return c.wallets
}

// Transactions returns the executions category client
func (c *Client) Transactions() *Transactions {
	return c.transactions
}

// Structs returns the structs category client
func (c *Client) Structs() *Structs {
	return c.structs
}
