---
title: "GET missing Access-Control-Allow-Origin header"
shortTitle: "Missing Access-Control-Allow-Origin header"
weight: 14
requestMethod: GET
---

### Summary
JavaScript code can make a cross-origin GET request.
The response must include an `Access-Control-Allow-Origin` header, otherwise the browser discards it and returns an error to the JavaScript code.

### Instructions
1. Hit green button below and see that request fails
1. Press F12 to open browser *Developer Tools*
1. Open *Console* tab and see error message *"No 'Access-Control-Allow-Origin' header is present"*