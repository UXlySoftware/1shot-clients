# @uxly/1shot-client

TypeScript client for the 1Shot API.

## Installation

```bash
npm install @uxly/1shot-client
```

## Usage

```typescript
import { OneShotClient } from '@uxly/1shot-client';

const client = new OneShotClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

// The client will automatically handle authentication and token management
const result = await client.someApiMethod();
```

## Features

- Automatic token management
- TypeScript support
- Strongly typed API methods
- Webhook verification utilities (coming soon)

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## License

MIT