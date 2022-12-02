---
title: "Cross-origin POST request with correct CORS setup"
shortTitle: "Correct CORS setup"
weight: 1
---

JavaScript code can make a cross-origin POST request.

The pre-flight response includes the correctly configured `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers` headers, so the browser makes the main request.

The response to the main request also includes a valid `Access-Control-Allow-Origin` header, so the browser accepts it.