---
title: "PUT request with missing Access-Control-Allow-Origin header"
shortTitle: "Missing Access-Control-Allow-Origin header"
weight: 7
---

JavaScript code can make a Cross-origin PUT request.

The response to the pre-flight request must include an `Access-Control-Allow-Origin` header, otherwise the browser won't make the main request.