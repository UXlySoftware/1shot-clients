# 1Shot Go Client

This is the official Go client for the 1Shot API.

## Installation

```bash
go get github.com/1shotapi/go-client
```

## Usage

```go
package main

import (
    "context"
    "log"

    "github.com/1shotapi/go-client"
)

func main() {
    client := oneshot.NewClient("your-api-key")
    
    // Use the client...
}
```

## Development

### Prerequisites

- Go 1.21 or later
- Make (optional, for using Makefile commands)

### Setup

1. Install Go from https://golang.org/dl/
2. Clone this repository
3. Initialize the module:
   ```bash
   cd clients/go
   go mod init github.com/1shotapi/go-client
   go mod tidy
   ```

### Project Structure

```
.
├── cmd/                    # Command-line applications
│   └── 1shot/             # Main application
│       └── main.go        # Entry point
├── internal/              # Private application code
│   ├── api/              # API client implementation
│   └── models/           # Data models
├── pkg/                   # Public library code
├── test/                  # Additional test files
├── go.mod                 # Go module file
├── go.sum                 # Go module checksums
└── README.md             # This file
```

### Building

```bash
go build ./...
```

### Testing

```bash
go test ./...
```

## License

Apache 2.0 