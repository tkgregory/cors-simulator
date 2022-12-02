---
title: "Cross-origin POST request including credentials"
shortTitle: "Include credentials"
weight: 4
---

A cross-origin request can be configured to include credentials.

Make sure to add `credentials: 'include'` to the `fetch` call, whenever you want to *send* or *receive* cookies.

```javascript
fetch(requestURL, {
    method: 'POST',
    credentials: 'include'
    headers: { "Content-type": "application/json" },
})
```

The response to the pre-flight request must include these headers:

* `Access-Control-Allow-Origin` with a value other than `*`
* `Access-Control-Allow-Headers` with a value other than `*`
* `Access-Control-Allow-Credentials` with a value of `true`

The response to the main request must also include the `Access-Control-Allow-Credentials` header.

