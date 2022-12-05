---
title: "PUT request with correct CORS setup"
shortTitle: "Correct CORS setup"
weight: 1
---

JavaScript code can make a Cross-origin PUT request.

The pre-flight response includes the correctly configured `Access-Control-Allow-Origin` header, so the browser then makes the main request.

The response to the main request also includes a valid `Access-Control-Allow-Origin` header, so the browser accepts it.