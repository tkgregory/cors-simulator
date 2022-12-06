---
title: "POST request with correct CORS setup"
shortTitle: "Correct CORS setup"
weight: 22
requestMethod: POST
---

### Summary
JavaScript code can make a cross-origin `POST` request.
Since there is a `Content-Type` header of `application/json`, the browser sends a pre-flight request.

The pre-flight response must include these correctly configured headers.
* `Access-Control-Allow-Origin` 
* `Access-Control-Allow-Methods`
* `Access-Control-Allow-Headers`

The response to the main request must also include the `Access-Control-Allow-Origin` header.

### Instructions
1. Press F12 to open browser *Developer Tools*
1. Open *Network* tab and filter by path *post-success*
1. Hit green button below and observe 1 pre-flight and 1 main request