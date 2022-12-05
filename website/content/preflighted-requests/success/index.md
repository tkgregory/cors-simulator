---
title: "PUT request with correct CORS setup"
shortTitle: "Correct CORS setup"
weight: 1
---

### Summary
JavaScript code can make a cross-origin `PUT` request.

The pre-flight response must include the correctly configured `Access-Control-Allow-Origin` header.
The response to the main request must include the same header.

### Instructions
1. Press F12 to open browser *Developer Tools*
1. Open *Network* tab and filter by path *put-success*
1. Hit green button below and observe 1 pre-flight and 1 main request