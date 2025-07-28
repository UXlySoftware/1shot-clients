package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/UXlySoftware/1shot-clients/clients/go/pkg/client"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file. Please create a .env file with ONESHOT_CLIENT_ID, ONESHOT_CLIENT_SECRET, and ONESHOT_BUSINESS_ID")
	}

	// Get credentials from environment variables
	clientID := os.Getenv("ONESHOT_CLIENT_ID")
	clientSecret := os.Getenv("ONESHOT_CLIENT_SECRET")
	businessID := os.Getenv("ONESHOT_BUSINESS_ID")

	if clientID == "" || clientSecret == "" || businessID == "" {
		log.Fatal("ONESHOT_CLIENT_ID, ONESHOT_CLIENT_SECRET, and ONESHOT_BUSINESS_ID must be set in .env file")
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
	transactions, err := c.ContractMethods().List(ctx, nil, nil, nil, nil, nil, nil, nil)
	if err != nil {
		log.Fatalf("Failed to list transactions: %v", err)
	}

	// Print results
	fmt.Printf("Found %d transactions\n", len(transactions))
	for _, tx := range transactions {
		fmt.Printf("- %s: %s\n", tx.Id, tx.Name)
	}
}
