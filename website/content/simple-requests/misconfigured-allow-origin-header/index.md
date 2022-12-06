---
title: "GET misconfigured Access-Control-Allow-Origin header"
shortTitle: "Misconfigured Access-Control-Allow-Origin header"
weight: 15
requestMethod: GET
---

### Summary
JavaScript code can make a cross-origin GET request.
The response must include a `Access-Control-Allow-Origin` header containing the request origin, otherwise the browser discards it and returns an error to the JavaScript code.

### Instructions
1. Hit green button below and see that request fails
1. Press F12 to open browser *Developer Tools*
1. Open *Console* tab and see error message *"The 'Access-Control-Allow-Origin' header has a value ... not equal to the supplied origin"*