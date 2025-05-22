package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/1shotapi/go-client/pkg/client"
)

func main() {
	// Get credentials from environment variables
	clientID := os.Getenv("ONESHOT_CLIENT_ID")
	clientSecret := os.Getenv("ONESHOT_CLIENT_SECRET")
	businessID := os.Getenv("ONESHOT_BUSINESS_ID")

	if clientID == "" || clientSecret == "" || businessID == "" {
		log.Fatal("ONESHOT_CLIENT_ID, ONESHOT_CLIENT_SECRET, and ONESHOT_BUSINESS_ID environment variables are required")
	}

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

	// Example: List transactions
	// All parameters are optional, so we can pass nil for all of them
	transactions, err := c.Transactions().List(ctx, nil, nil, nil, nil, nil, nil)
	if err != nil {
		log.Fatalf("Failed to list transactions: %v", err)
	}

	// Print results
	fmt.Printf("Found %d transactions\n", len(transactions))
	for _, tx := range transactions {
		fmt.Printf("- %s: %s\n", tx.Id, tx.Name)
	}
}
