[![CORS Simulator](https://github.com/tkgregory/cors-simulator/actions/workflows/ci.yml/badge.svg)](https://github.com/tkgregory/cors-simulator/actions/workflows/ci.yml)

# CORS Simulator

A set of examples to demonstrate important CORS concepts.

## Running

`hugo server -s website`

## Building

`hugo -s website`

This generates the static website files in *website/public*.

## Deploying

* on push to *main*, CI deploys to *dev*
* on tag, CI deploys to *prod*

### Create certificate for *dev*
`serverless create-cert`

### Deploy serverless stack to *dev*
`serverless deploy`

### Deploy website to *dev*
`serverless s3sync`