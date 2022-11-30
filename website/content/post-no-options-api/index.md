---
title: "Cross-origin POST request with missing Options API"
weight: 7
---

# Cross-origin POST request with missing Options API

JavaScript code can make a cross-origin POST request.

An API must exist to service the pre-flight `OPTIONS` request, otherwise the browser won't make the main request.