---
title: "Cross-origin POST request with missing Access-Control-Allow-Origin header"
weight: 7
---

# Cross-origin POST request with missing Access-Control-Allow-Origin header

JavaScript code can make a cross-origin POST request.

The response to the pre-flight request must include an `Access-Control-Allow-Origin` header, otherwise the browser won't make the main request.