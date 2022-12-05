---
title: "PUT request with response exposing a header"
shortTitle: "Expose response header"
weight: 3
---

### Summary
When JavaScript code makes a cross-origin `PUT` request, the response can optionally expose headers to it.

The `Access-Control-Expose-Headers` response header must be set on the main request, with a comma-separated list of header names to be exposed.

### Instructions
1. Hit green button below
1. Verify response headers contains *best-header-ever* header
1. Optionally check network requests in *Developer Tools* (F12)