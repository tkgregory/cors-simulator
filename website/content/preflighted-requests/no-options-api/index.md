---
title: "PUT request with missing Options API"
shortTitle: "Missing Options API"
weight: 27
requestMethod: PUT
---

### Summary
JavaScript code can make a cross-origin `PUT` request.
An API must exist to service the pre-flight `OPTIONS` request, otherwise the browser won't make the main request.

### Instructions
1. Press F12 to open browser *Developer Tools*
1. Open *Network* tab and filter by path *no-options-api*
1. Hit green button below and see that request fails
1. Verify that pre-flight request received a *404 Not Found* response