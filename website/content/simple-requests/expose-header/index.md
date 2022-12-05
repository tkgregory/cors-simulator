---
title: "GET request with response exposing a header"
shortTitle: "Expose response header"
weight: 2
---

### Summary

When JavaScript code makes a cross-origin `GET` request, the response can optionally expose headers to it.
The `Access-Control-Expose-Headers` response header must be set, with a comma-separated list of header names to be exposed.

### Instructions

1. Hit green button below and see `GET` response body
1. Observe difference between source and request origins, confirming cross-origin request