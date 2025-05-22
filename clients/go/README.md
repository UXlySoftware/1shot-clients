# 1Shot Go Client

This is the official Go client for the 1Shot API, providing a simple and efficient way to interact with the 1Shot platform programmatically.

## Installation

```bash
go get github.com/1shotapi/go-client
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

    "github.com/1shotapi/go-client/pkg/client"
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
transactions, err := c.Transactions().List(ctx, nil, nil, nil, nil, nil, nil)
if err != nil {
    log.Fatalf("Failed to list transactions: %v", err)
}

// Create a new transaction
newTx, err := c.Transactions().Create(ctx, &swagger.NewTransaction{
    Chain:           swagger.EChain(1), // Ethereum Mainnet
    ContractAddress: "0x123...",
    EscrowWalletId: "wallet-id",
    Name:           "My Transaction",
    Description:    "Description of my transaction",
    FunctionName:   "transfer",
    StateMutability: "nonpayable",
    Inputs:         []swagger.NewSolidityStructParam{...},
})

// Execute a transaction
execution, err := c.Transactions().Execute(ctx, "transaction-id", map[string]interface{}{
    "amount": "1000000000000000000", // 1 ETH in wei
    "to": "0x456...",
})
```

### Working with Wallets

```go
// List wallets
wallets, err := c.Wallets().List(ctx, nil, nil, nil)
if err != nil {
    log.Fatalf("Failed to list wallets: %v", err)
}

// Create a new wallet
newWallet, err := c.Wallets().Create(ctx, &swagger.NewEscrowWallet{
    Chain:        swagger.EChain(1), // Ethereum Mainnet
    Name:         "My Wallet",
    Description:  "Description of my wallet",
})

// Get wallet details
wallet, err := c.Wallets().Get(ctx, "wallet-id", nil)
```

### Working with Executions

```go
// List executions
executions, err := c.Executions().List(ctx, nil, nil, nil, nil, nil, nil, nil)
if err != nil {
    log.Fatalf("Failed to list executions: %v", err)
}

// Get execution details
execution, err := c.Executions().Get(ctx, "execution-id")
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

Apache 2.0 