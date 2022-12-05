registerDynamicContent(function () {
    const requestURL = apiBaseURL + "put-set-cookie";

    fetch(requestURL, {
        method: 'PUT',
        credentials: 'include'
    })
        .then((response) => {
            return fetch(apiBaseURL + "put-requires-cookie", {
                method: 'PUT',
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