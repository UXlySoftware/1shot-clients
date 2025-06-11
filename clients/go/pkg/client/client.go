package client

import (
	"context"
	"fmt"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/internal/generated"
)

// Client represents a 1Shot API client
type Client struct {
	api          *swagger.APIClient
	businessId   string
	accessToken  string
	baseURL      string
	transactions *Transactions
	wallets      *Wallets
	executions   *Executions
	structs      *Structs
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
	c.transactions = &Transactions{
		api:        apiClient.TransactionApi,
		businessId: cfg.BusinessID,
	}
	c.wallets = &Wallets{
		api:        apiClient.EscrowWalletsApi,
		businessId: cfg.BusinessID,
	}
	c.executions = &Executions{
		api:        apiClient.TransactionExecutionApi,
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
	c.transactions.api = c.api.TransactionApi
	c.wallets.api = c.api.EscrowWalletsApi
	c.executions.api = c.api.TransactionExecutionApi
	c.structs.api = c.api.SolidityStructsApi

	return nil
}

// Transactions returns the transactions category client
func (c *Client) Transactions() *Transactions {
	return c.transactions
}

// Wallets returns the wallets category client
func (c *Client) Wallets() *Wallets {
	return c.wallets
}

// Executions returns the executions category client
func (c *Client) Executions() *Executions {
	return c.executions
}

// Structs returns the structs category client
func (c *Client) Structs() *Structs {
	return c.structs
}
