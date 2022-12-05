registerDynamicContent(function () {
    const requestURL = new URL(apiBaseURL + "/get-expose-header");
    const expectedHeader = "Best-Header-Ever";

    fetch(requestURL.toString())
        .then((response) => {
            updateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(requestURL.origin, error);
        });
});