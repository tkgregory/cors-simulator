registerDynamicContent(function () {
    const requestURL = apiBaseURL + "get-success";

    fetch(requestURL)
        .then((response) => {
            updateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});