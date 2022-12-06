---
title: "PUT request including credentials"
shortTitle: "Include credentials"
weight: 25
requestMethod: PUT
---

### Summary
A cross-origin `PUT` request can be configured to include credentials.

Add `credentials: 'include'` to the JavaScript `fetch` call, to *send* or *receive* cookies.

```javascript
fetch(requestURL, {
    credentials: 'include',
    ...
})
```

The response to both the pre-flight and main request must include the `Access-Control-Allow-Credentials` header with a value of `true`.

### Instructions

1. Hit green button below
1. Verify *"You are authorized!"* response returned successfully
1. Optionally check network requests in *Developer Tools* (F12)