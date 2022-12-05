registerDynamicContent(function () {
    const requestURL = new URL(apiBaseURL + "/get-expose-header");
    const expectedHeader = "Best-Header-Ever";

    fetch(requestURL.toString())
        .then(response => console.log(response.headers.get("Best-Header-Ever")))
        .catch((error) => {
            updateForFailure(requestURL.origin, error);
        });
});