---
title: "GET request including credentials"
shortTitle: "Include credentials"
weight: 13
---

### Summary
A cross-origin request can be configured to include credentials.

Add `credentials: 'include'` to the JavaScript `fetch` call, to *send* or *receive* cookies.

```javascript
fetch(requestURL, {
    credentials: 'include',
    ...
})
```

The response must include the `Access-Control-Allow-Credentials` header with a value of `true`.

### Instructions

1. Hit green button below and verify *"You are authorized!"* response returned successfully
1. Observe difference between source and request origins, confirming cross-origin request