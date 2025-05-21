package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/1shotapi/go-client/pkg/client"
)

func main() {
	// Get API key from environment variable
	apiKey := os.Getenv("ONESHOT_API_KEY")
	if apiKey == "" {
		log.Fatal("ONESHOT_API_KEY environment variable is required")
	}

	// Create a new client
	c := client.NewClient(apiKey)

	// Create a context
	ctx := context.Background()

	// Example: List transactions
	// transactions, err := c.Transactions().List(ctx, nil)
	transactions, err := c.Transactions().List(ctx, nil)
	if err != nil {
		log.Fatalf("Failed to list transactions: %v", err)
	}

	// Print results
	fmt.Printf("Found %d transactions\n", len(transactions))
	for _, tx := range transactions {
		fmt.Printf("- %s: %s\n", tx.Id, tx.Name)
	}
}
