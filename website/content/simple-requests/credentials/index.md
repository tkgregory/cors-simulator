---
title: "Cross-origin GET request including credentials"
shortTitle: "Include credentials"
weight: 3
---

A cross-origin request can be configured to include credentials.

Add `credentials: 'include'` to the `fetch` call, whenever you want to *send* or *receive* cookies.

```javascript
fetch(requestURL, {
    credentials: 'include',
    ...
})
```

The response to the main request must include the `Access-Control-Allow-Credentials` header with a value of `true`.