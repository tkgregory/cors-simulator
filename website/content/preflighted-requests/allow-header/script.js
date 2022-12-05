registerDynamicContent(function () {
    const requestURL = new URL(apiBaseURL + "put-allow-header");
    const headerName = "cool-stuff";
    const headerValue = "pi=3.14";

    fetch(requestURL.toString(), {
        method: 'PUT',
        headers: {
            [headerName]: headerValue
        },
    })
        .then((response) => {
            updateForSuccessWithResponse(requestURL.origin, response);
        })
        .catch((error) => {
            updateForFailure(requestURL.origin, error);
        });
});