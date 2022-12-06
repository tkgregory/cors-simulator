---
title: "PUT request with missing Access-Control-Allow-Origin header"
shortTitle: "Missing Access-Control-Allow-Origin header"
weight: 28
requestMethod: PUT
---

### Summary
JavaScript code can make a cross-origin `PUT` request.
The response to the pre-flight request must include an `Access-Control-Allow-Origin` header, otherwise the browser won't make the main request.

### Instructions
1. Hit green button below and see that request fails
1. Press F12 to open browser *Developer Tools*
1. Open *Console* tab and see error message *"Response to preflight request ... No 'Access-Control-Allow-Origin' header is present on the requested resource."*