---
title: "PUT request with response exposing a header"
shortTitle: "Expose response header"
weight: 3
---

When JavaScript code makes a cross-origin PUT request, the response can optionally expose headers to it.

The `Access-Control-Expose-Headers` response header must be set, with a comma-separated list of header names to be exposed.