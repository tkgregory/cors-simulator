---
title: "PUT request with max age"
shortTitle: "Max age"
weight: 25
---

### Summary
JavaScript code can make a cross-origin `PUT` request.
The pre-flight response can include a `Access-Control-Max-Age` header, causing the browser to cache the response for the specified number of seconds.

### Instructions

1. Press F12 to open browser *Developer Tools*
1. Open *Network* tab and filter by path *put-max-age*
1. Hit green button below and observe 1 pre-flight and 1 main request
1. Refresh page, hit button again, observing 0 pre-flight requests
1. Wait until cache expires (60 seconds)
1. Refresh page, hit button again, observing pre-flight request again