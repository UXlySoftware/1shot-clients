# Client Packages
1Shot has made installable packages for several languages, including:
  - Javascript
  - Typescript
  - Python
  - PHP
  - C#

These packages are available in the appropriate distribution systems, such as NPM or PIP

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