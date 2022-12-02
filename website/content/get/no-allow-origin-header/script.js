registerDynamicContent(function () {
    const requestURL = apiBaseURL + "/get-no-allow-origin-header";

    fetch(requestURL)
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});