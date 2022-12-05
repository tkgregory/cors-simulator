registerDynamicContent(function () {
    const requestURL = apiBaseURL + "get-set-cookie";

    fetch(requestURL, {
        credentials: 'include'
    })
        .then((response) => {
            return fetch(apiBaseURL + "get-requires-cookie", {
                credentials: 'include'
            });
        })
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});