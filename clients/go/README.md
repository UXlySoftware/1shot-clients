# 1Shot Go Client

This is the official Go client for the 1Shot API. It provides a simple and type-safe way to interact with the 1Shot API from Go applications.

## Installation

```bash
go get github.com/UXlySoftware/1shot-clients/clients/go
```

## Environment Setup

Before using the client, you'll need to set up your environment variables:

```bash
export ONESHOT_CLIENT_ID="your-client-id"
export ONESHOT_CLIENT_SECRET="your-client-secret"
export ONESHOT_BUSINESS_ID="your-business-id"
```

## Usage

Here are some examples of how to use the client:

### Basic Setup

```go
package main

import (
    "context"
    "log"
    "os"

    client "github.com/UXlySoftware/1shot-clients/clients/go"
	swagger "github.com/UXlySoftware/1shot-clients/clients/go/gen"
)

func main() {
    // Get credentials from environment variables
    clientID := os.Getenv("ONESHOT_CLIENT_ID")
    clientSecret := os.Getenv("ONESHOT_CLIENT_SECRET")
    businessID := os.Getenv("ONESHOT_BUSINESS_ID")

    // Create a new client
    c, err := client.NewClient(client.ClientConfig{
        ClientID:     clientID,
        ClientSecret: clientSecret,
        BusinessID:   businessID,
    })
    if err != nil {
        log.Fatalf("Failed to create client: %v", err)
    }

    // Create a context
    ctx := context.Background()
}
```

### Working with Transactions

```go
// List transactions
transactions, err := c.Transactions().List(ctx, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil)
if err != nil {
    log.Fatalf("Failed to list transactions: %v", err)
}

// Create a new transaction
newTx, err := c.ContractMethods().Create(ctx, swagger.EChain(1), "0x123...", "wallet-id", "My Transaction", "Description of my transaction", "transfer", swagger.ESolidityStateMutability("nonpayable"), []swagger.NewSolidityStructParam{...}, nil, nil)

// Execute a transaction
execution, err := c.ContractMethods().Execute(ctx, "contract-method-id", map[string]interface{}{
    "amount": "1000000000000000000", // 1 ETH in wei
    "to":     "0x456...",
}, nil, nil, nil)
```

### Working with Wallets

```go
// List wallets
wallets, err := c.Wallets().List(ctx, nil, nil, nil, nil)
if err != nil {
    log.Fatalf("Failed to list wallets: %v", err)
}

// Create a new wallet
description := "Description of my wallet"
	newWallet, err := c.Wallets().Create(ctx, swagger.EChain(1), "My Wallet", &description)

// Get wallet details
wallet, err := c.Wallets().Get(ctx, "wallet-id", nil)
```

### Working with Executions

```go
// List executions
executions, err := c.ContractMethods().List(ctx, nil, nil, nil, nil, nil, nil, nil, nil)
	if err != nil {
		log.Fatalf("Failed to list executions: %v", err)
	}

// Get execution details
execution, err := c.ContractMethods().Get(ctx, "contract-method-id")
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

- Go 1.21 or later
- Make (optional, for using Makefile commands)

### Setup

1. Install Go from https://golang.org/dl/
2. Clone this repository:
   ```bash
   git clone https://github.com/1shotapi/go-client.git
   cd go-client
   ```
3. Initialize the module:
   ```bash
   go mod init github.com/1shotapi/go-client
   go mod tidy
   ```

### Project Structure

```
.
├── cmd/                    # Command-line applications
│   └── 1shot/             # Main application
│       └── main.go        # Example application
├── docs/                  # Documentation files
├── internal/              # Private application code
│   └── generated/        # Generated API client code
├── pkg/                   # Public library code
│   └── client/           # Client implementation
├── test/                  # Additional test files
├── go.mod                 # Go module file
├── go.sum                 # Go module checksums
└── README.md             # This file
```

### Building

To build the entire project:

```bash
go build ./...
```

To build a specific package:

```bash
go build ./pkg/client
```

To build the example application:

```bash
go build ./cmd/1shot
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
go test ./pkg/client
```

Update the package cache on pkg.go.dev:

**Important**: Run these commands from within a Go module (a directory with a `go.mod` file):

```bash
# For the latest version
go get github.com/UXlySoftware/1shot-clients/clients/go@latest

# For a specific version (e.g., v0.2.0)
go get github.com/UXlySoftware/1shot-clients/clients/go@v0.2.0

# Or for a specific commit/branch
go get github.com/UXlySoftware/1shot-clients/clients/go@main
```

If you're not in a Go module, first initialize one:
```bash
go mod init your-module-name
```

### Running the Example Application

The example application in `cmd/1shot/main.go` demonstrates basic usage of the client. To run it:

1. Set up your credentials using one of these methods:

   a. Environment variables:
   ```bash
   export ONESHOT_CLIENT_ID="your-client-id"
   export ONESHOT_CLIENT_SECRET="your-client-secret"
   export ONESHOT_BUSINESS_ID="your-business-id"
   ```

   b. `.env` file (recommended for development):
   Create a `.env` file in the `cmd/1shot` directory:
   ```bash
   # cmd/1shot/.env
   ONESHOT_CLIENT_ID=your-client-id
   ONESHOT_CLIENT_SECRET=your-client-secret
   ONESHOT_BUSINESS_ID=your-business-id
   ```

   Then modify `main.go` to use the `.env` file:
   ```go
   package main

   import (
       "context"
       "fmt"
       "log"
       "os"

       "github.com/1shotapi/go-client/pkg/client"
       "github.com/joho/godotenv"
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

       // Rest of the code...
   }
   ```

   Install the required package:
   ```bash
   go get github.com/joho/godotenv
   ```

2. Build and run the example:
   ```bash
   cd cmd/1shot
   go run main.go
   ```

   Or run it directly from the project root:
   ```bash
   go run cmd/1shot/main.go
   ```

The example will:
- Connect to the 1Shot API using your credentials
- List all transactions for your business
- Print the transaction IDs and names

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
   - Make sure you're using Go 1.21 or later
   - Run `go mod tidy` to update dependencies
   - Check for any conflicting package versions

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details. 