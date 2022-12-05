---
title: "Cross-origin GET request with misconfigured Access-Control-Allow-Origin header"
shortTitle: "Misconfigured Access-Control-Allow-Origin header"
weight: 4
---

JavaScript code can make a cross-origin GET request.

The response must include a `Access-Control-Allow-Origin` header containing the request origin, otherwise the browser discards it.