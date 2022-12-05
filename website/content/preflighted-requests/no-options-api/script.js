registerDynamicContent(function () {
    const requestURL = apiBaseURL + "/put-no-options-api";

    fetch(requestURL, {
        method: 'PUT',
    })
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});