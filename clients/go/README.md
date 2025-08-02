# 1Shot Go Client

This is the official Go client for the 1Shot API. It provides a simple and type-safe way to interact with the 1Shot API from Go applications.

## Features

- 🔐 **Authentication**: Automatic OAuth2 client credentials flow
- 📦 **Type Safety**: Full type safety with generated models
- 🏗️ **Modular Design**: Organized into logical categories (Wallets, Transactions, Contract Methods, Structs)
- 🚀 **Easy to Use**: Simple and intuitive API design
- 📚 **Well Documented**: Comprehensive examples and documentation

## Installation

```bash
go get github.com/UXlySoftware/1shot-clients/clients/go
```

## Quick Start

### 1. Environment Setup

Set up your environment variables:

```bash
export ONESHOT_CLIENT_ID="your-client-id"
export ONESHOT_CLIENT_SECRET="your-client-secret"
export ONESHOT_BUSINESS_ID="your-business-id"
```

### 2. Basic Usage

```go
package main

import (
    "context"
    "log"
    "os"

    "github.com/UXlySoftware/1shot-clients/clients/go"
)

func main() {
    // Get credentials from environment variables
    clientID := os.Getenv("ONESHOT_CLIENT_ID")
    clientSecret := os.Getenv("ONESHOT_CLIENT_SECRET")
    businessID := os.Getenv("ONESHOT_BUSINESS_ID")

    // Create a new client
    c, err := oneshot.NewClient(oneshot.ClientConfig{
        ClientID:     clientID,
        ClientSecret: clientSecret,
        BusinessID:   businessID,
    })
    if err != nil {
        log.Fatalf("Failed to create client: %v", err)
    }

    // Create a context
    ctx := context.Background()

    // Now you can use the client!
    // Example: List wallets
    wallets, err := c.Wallets().List(ctx, nil, nil, nil, nil)
    if err != nil {
        log.Fatalf("Failed to list wallets: %v", err)
    }

    log.Printf("Found %d wallets", len(wallets.Data))
}
```

## API Categories

The client is organized into logical categories for different API operations:

### Wallets

Manage blockchain wallets:

```go
// List all wallets
wallets, err := c.Wallets().List(ctx, nil, nil, nil, nil)

// Create a new wallet
description := "My new wallet description"
newWallet, err := c.Wallets().Create(ctx, swagger.EChain(1), "My Wallet", &description)

// Get wallet details
wallet, err := c.Wallets().Get(ctx, "wallet-id", nil)

// Update wallet
wallet, err = c.Wallets().Update(ctx, "wallet-id", "Updated Name", &description)

// Delete wallet
err = c.Wallets().Delete(ctx, "wallet-id")
```

### Transactions

Manage blockchain transactions:

```go
// List transactions
transactions, err := c.Transactions().List(ctx, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil)

// Get transaction details
transaction, err := c.Transactions().Get(ctx, "transaction-id")
```

### Contract Methods

Work with smart contract methods:

```go
// List contract methods
methods, err := c.ContractMethods().List(ctx, nil, nil, nil, nil, nil, nil, nil, nil)

// Create a new contract method
newMethod, err := c.ContractMethods().Create(
    ctx,
    swagger.EChain(1),
    "0x123...", // contract address
    "wallet-id",
    "Transfer Method",
    "Description of the method",
    "transfer",
    swagger.ESolidityStateMutability("nonpayable"),
    []swagger.NewSolidityStructParam{...},
    nil,
    nil,
)

// Execute a contract method
execution, err := c.ContractMethods().Execute(
    ctx,
    "contract-method-id",
    map[string]interface{}{
        "amount": "1000000000000000000", // 1 ETH in wei
        "to":     "0x456...",
    },
    nil,
    nil,
    nil,
)

// Get method details
method, err := c.ContractMethods().Get(ctx, "contract-method-id")

// Test a method
testResult, err := c.ContractMethods().Test(
    ctx,
    "contract-method-id",
    map[string]interface{}{
        "amount": "1000000000000000000",
        "to":     "0x456...",
    },
)
```

## Configuration

### Custom Base URL

You can specify a custom base URL for testing or staging environments:

```go
c, err := oneshot.NewClient(oneshot.ClientConfig{
    ClientID:     clientID,
    ClientSecret: clientSecret,
    BusinessID:   businessID,
    BaseURL:      "https://staging-api.1shot.com", // Optional
})
```

### Environment Variables

The client supports configuration via environment variables:

- `ONESHOT_CLIENT_ID`: Your 1Shot client ID
- `ONESHOT_CLIENT_SECRET`: Your 1Shot client secret
- `ONESHOT_BUSINESS_ID`: Your 1Shot business ID

## Examples

### Complete Example

See the example in `internal/examples/contract_methods_example/main.go` for a complete working example.

### Using with .env file

For development, you can use a `.env` file:

```bash
# .env
ONESHOT_CLIENT_ID=your-client-id
ONESHOT_CLIENT_SECRET=your-client-secret
ONESHOT_BUSINESS_ID=your-business-id
```

```go
package main

import (
    "log"
    "os"

    "github.com/joho/godotenv"
    "github.com/UXlySoftware/1shot-clients/clients/go"
)

func main() {
    // Load .env file
    if err := godotenv.Load(); err != nil {
        log.Fatal("Error loading .env file")
    }

    // Get credentials from environment variables
    clientID := os.Getenv("ONESHOT_CLIENT_ID")
    clientSecret := os.Getenv("ONESHOT_CLIENT_SECRET")
    businessID := os.Getenv("ONESHOT_BUSINESS_ID")

    // Create client and use it...
}
```

## Versioning

This Go client follows semantic versioning and is versioned independently of other clients in this monorepo. The versioning is managed through Git tags in the format `clients/go/vX.Y.Z`.

To use a specific version:

```bash
# Latest version
go get github.com/UXlySoftware/1shot-clients/clients/go

# Specific version
go get github.com/UXlySoftware/1shot-clients/clients/go@v0.1.0
```

In your `go.mod`, you can specify version constraints:

```go
require (
    github.com/UXlySoftware/1shot-clients/clients/go v0.1.0  // exact version
)
```

## Development

### Prerequisites

- Go 1.23 or later
- Make (optional, for using Makefile commands)

### Project Structure

```
clients/go/
├── client.go              # Main client implementation
├── wallets.go             # Wallet operations
├── transactions.go        # Transaction operations
├── contractMethods.go     # Contract method operations
├── structs.go             # Struct operations
├── gen/                   # Generated API client code
│   ├── client.go
│   ├── configuration.go
│   ├── api_*.go          # API endpoint implementations
│   └── model_*.go        # Data models
├── internal/
│   └── examples/         # Example applications
│       └── contract_methods_example/
│           └── main.go
├── go.mod                # Go module file
├── go.sum                # Go module checksums
└── README.md            # This file
```

### Building

To build the entire project:

```bash
go build ./...
```

To build a specific package:

```bash
go build ./clients/go
```

### Testing

Run all tests:

```bash
go test ./...
```

Run tests with coverage:

```bash
go test ./... -cover
```

Run tests for a specific package:

```bash
go test ./clients/go
```

### Running Examples

Run the contract methods example:

```bash
cd internal/examples/contract_methods_example
go run main.go
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Ensure your environment variables are set correctly
   - Verify your client ID and secret are valid
   - Check that your business ID is correct

2. **Network Issues**
   - Verify your internet connection
   - Check if the 1Shot API is accessible
   - Ensure your firewall isn't blocking the connection

3. **Build Errors**
   - Make sure you're using Go 1.23 or later
   - Run `go mod tidy` to update dependencies
   - Check for any conflicting package versions

4. **Import Errors**
   - Ensure you're importing the correct package name: `github.com/UXlySoftware/1shot-clients/clients/go`
   - The package name is `oneshot`, not `client`

### Getting Help

- Check the [1Shot API Documentation](https://docs.1shotapi.com)
- Review the examples in `internal/examples/`
- Open an issue on GitHub for bugs or feature requests

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details. 