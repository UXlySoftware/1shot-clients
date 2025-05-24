# 1Shot API Python Client

A Python client for the 1Shot API that provides both synchronous and asynchronous interfaces.

## Installation

```bash
pip install uxly-1shot-client
```

## Usage

### Synchronous Client

```python
import os

# its handy to set your API key and secret with environment variables
API_KEY = os.getenv("ONESHOT_API_KEY")
API_SECRET = os.getenv("ONESHOT_API_SECRET")
BUSINESS_ID = os.getenv("ONESHOT_BUSINESS_ID") 

from uxly_1shot_client import Client

# Initialize the client
client = Client(
    api_key=API_KEY,
    api_secret=API_SECRET,
    base_url="https://api.1shotapi.com/v0"  # Optional, defaults to this URL
)

# List transactions for a business
transactions = client.transactions.list(
    business_id=BUSINESS_ID,
    params={"page": 1, "page_size": 10}
)

# Get transaction endpoint details
transaction_endpoint = client.transactions.get(transactions.response[0].id)

# Execute a transaction
execution = client.transactions.execute(
    transaction_id=transaction_endpoint.id,
    params={
        "amount": "1000000000000000000",  # 1 ETH in wei
        "recipient": "0x123..."
    }
)

executions_list = client.executions.list(business_id=BUSINESS_ID)

execution_status = client.executions.get(execution.id)

wallet = client.wallets.get(escrow_wallet_id="54ee551b-5586-48c9-a7ee-72d74ed889c0", include_balances=True)

wallets = client.wallets.list(BUSINESS_ID)

mint_endpoint_payload = {
        "chain": 11155111,
        "contractAddress": "0xA1BfEd6c6F1C3A516590edDAc7A8e359C2189A61",
        "escrowWalletId": f"{wallet.id}",
        "name": "Sepolia Token Deployer",
        "description": "This deploys ERC20 tokens on Sepolia",
        "functionName": "deployToken",
        "callbackUrl": "https://rapid-clam-infinitely.ngrok-free.app/1shot",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "admin",
                "type": "address",
                "index": 0,
            },
            {
                "name": "name",
                "type": "string",
                "index": 1
            },
            {
                "name": "ticker",
                "type": "string",
                "index": 2
            },
            {
                "name": "premint",
                "type": "uint",
                "index": 3
            }
        ],
        "outputs": []
    }

# Create a new transaction
new_transaction = client.transactions.create(
    business_id=BUSINESS_ID,
    params=mint_endpoint_payload
)
```

### Asynchronous Client

```python
import os

# its handy to set your API key and secret with environment variables
API_KEY = os.getenv("ONESHOT_API_KEY")
API_SECRET = os.getenv("ONESHOT_API_SECRET")
BUSINESS_ID = os.getenv("ONESHOT_BUSINESS_ID") 

import asyncio
from uxly_1shot_client import AsyncClient

async def main():
    # Initialize the client
    client = AsyncClient(
        api_key=API_KEY,
        api_secret=API_SECRET,
        base_url="https://api.1shotapi.com/v0"  # Optional, defaults to this URL
    )
    # List transactions for a business
    transactions = await client.transactions.list(
        business_id=BUSINESS_ID,
        params={"page": 1, "page_size": 10}
    )
    # Execute a transaction
    execution = await client.transactions.execute(
        transaction_id="424f56a9-cc15-4b5c-9bab-5fc5c9569869",
        params={
            "account": "0xE936e8FAf4A5655469182A49a505055B71C17604"
        }
    )
    
    # Get available transaction endpoints attached to your organization
    transaction = await client.executions.list(BUSINESS_ID)
    for transaction in transactions.response:
        print(f"Transaction ID: {transaction.id}, Status: {transaction.name}")

    # Get available wallets attached to your organization
    wallets = await client.wallets.list(BUSINESS_ID)
    for wallet in wallets.response:
        print(f"Wallet ID: {wallet.id}, Address: {wallet.account_address}")

    # Search for relevant smart contracts with natural language
    contracts = await client.transactions.search_contracts({"query": "I need to transfer USDC on Sepolia testnet", "chain": "11155111"})
    print("Contract Prompt: ", contracts[0].description)

# Run the async code
asyncio.run(main())
```

### Webhook Verification

#### Using the Standalone Function

```python
from uxly_1shot_client import verify_webhook
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

@app.post("/webhook")
async def handle_webhook(request: Request):
    # Get the webhook body and signature
    body = await request.json()
    signature = body.pop("signature", None)
    
    if not signature:
        raise HTTPException(status_code=400, detail="Signature missing")
    
    # Your webhook public key
    public_key = "your_webhook_public_key"
    
    try:
        # Verify the webhook signature
        is_valid = verify_webhook(
            body=body,
            signature=signature,
            public_key=public_key
        )
        
        if not is_valid:
            raise HTTPException(status_code=403, detail="Invalid signature")
            
        return {"message": "Webhook verified successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))
```

#### Using the WebhookVerifier Class

```python
from uxly_1shot_client import WebhookVerifier
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

# Create a verifier instance with your public key
verifier = WebhookVerifier(public_key="your_webhook_public_key")

@app.post("/webhook")
async def handle_webhook(request: Request):
    # Get the webhook body and signature
    body = await request.json()
    signature = body.pop("signature", None)
    
    if not signature:
        raise HTTPException(status_code=400, detail="Signature missing")
    
    try:
        # Verify the webhook signature
        is_valid = verifier.verify(
            body=body,
            signature=signature
        )
        
        if not is_valid:
            raise HTTPException(status_code=403, detail="Invalid signature")
            
        return {"message": "Webhook verified successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))
```

## Error Handling

The client raises exceptions for various error conditions:

- `requests.exceptions.RequestException` for synchronous client errors
- `httpx.HTTPError` for asynchronous client errors
- `ValueError` for invalid parameters
- `InvalidSignature` for invalid webhook signatures

## Type Hints

The client includes comprehensive type hints for better IDE support and type checking. All models and responses are properly typed using Pydantic models.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 