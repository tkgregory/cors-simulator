---
title: "GET request with custom request header"
shortTitle: "Custom request header"
weight: 2
---

For JavaScript code to make a cross-origin GET request with a custom header, the response to the pre-flight request must include the `Access-Control-Allow-Headers` header.

The header must be set to a comma-separated list of header names, which can then be sent with the main request.