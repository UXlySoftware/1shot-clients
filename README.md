# 1Shot API Clients

This repository contains official client libraries for the 1Shot API in various programming languages.

## Available Clients

- [TypeScript/JavaScript](./clients/node) - Published to NPM
- [Python](./clients/python) - Published to PyPI
- [Go](./clients/go) - Published as a Go module
- C# (Coming soon)

## Versioning

Each client follows its own versioning scheme appropriate for its ecosystem:

### TypeScript/JavaScript Client
- Versioned through `package.json`
- Published to NPM
- Follows semantic versioning

### Python Client
- Versioned through `setup.py`/`pyproject.toml`
- Published to PyPI
- Follows semantic versioning

### Go Client
- Versioned through Git tags in the format `clients/go/vX.Y.Z`
- Published as a Go module
- Follows semantic versioning
- Example: `clients/go/v0.1.0`

The Go client's versioning is managed through Git tags that are specific to the Go module path. This allows the Go client to be versioned independently of other clients in this monorepo.

## Development

### Prerequisites

- Node.js (for TypeScript/JavaScript client)
- Python 3.8+ (for Python client)
- Go 1.21+ (for Go client)
- Docker (for generating clients from OpenAPI spec)

### Generating Clients

The clients are generated from the OpenAPI specification using the OpenAPI Generator.

```bash
# Generate TypeScript client
docker run -v $(pwd):/local openapitools/openapi-generator-cli generate \
    -i /local/m2mGatewaySpec.yaml \
    -g nodejs-typescript \
    -o /local/clients/node

# Generate Python client
docker run -v $(pwd):/local openapitools/openapi-generator-cli generate \
    -i /local/m2mGatewaySpec.yaml \
    -g python \
    -o /local/clients/python

# Generate Go client
docker run -v $(pwd):/local openapitools/openapi-generator-cli generate \
    -i /local/m2mGatewaySpec.yaml \
    -g go \
    -o /local/clients/go
```

### Validating the OpenAPI Spec

```bash
npx @redocly/cli lint m2mGatewaySpec.yaml
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Validation

You can validate the openAPI spec like this:

```bash
npx @redocly/cli lint m2mGatewaySpec.yaml
```

## Python

```sh
sudo docker run -v /home/todd/code/1shot-clients/:/local openapitools/openapi-generator-cli generate -i /local/m2mGatewaySpec.yaml -g python -o /local/clients/python
```

## Node


```sh
sudo docker run -v /home/todd/code/1shot-clients/:/local openapitools/openapi-generator-cli generate -i /local/m2mGatewaySpec.yaml -g nodejs-typescript -o /local/clients/node
```