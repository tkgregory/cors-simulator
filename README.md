[![CORS Simulator](https://github.com/tkgregory/cors-simulator/actions/workflows/ci.yml/badge.svg)](https://github.com/tkgregory/cors-simulator/actions/workflows/ci.yml)

# CORS Simulator

A set of examples to demonstrate important CORS concepts.

## Deploying

On push to *main*, CI auto-deployment deploys to *prod*.

### Create certificate
`serverless create-cert`

### Deploy serverless stack to *dev*
`serverless deploy`

### Deploy serverless stack to *prod*
`serverless deploy --stage prod`

### Build and deploy website
`hugo -s website && serverless s3sync`