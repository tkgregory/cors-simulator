registerDynamicContent(function () {
    const requestURL = new URL(apiBaseURL + "/put-expose-header");
    const expectedHeader = "Best-Header-Ever";

    fetch(requestURL.toString(), {
        method: 'PUT',
    })
        .then((response) => {
            if (response.headers.has(expectedHeader)) {
                updateForSuccessWithResponse(requestURL.origin, response);
            } else {
                updateForFailure(requestURL.origin, "Response did not contain expected header: " + expectedHeader);
            }
        })
        .catch((error) => {
            updateForFailure(requestURL.origin, error);
        });
});