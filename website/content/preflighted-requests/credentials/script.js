registerDynamicContent(function () {
    const requestURL = apiBaseURL + "post-set-cookie";

    fetch(requestURL, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        credentials: 'include'
    })
        .then((response) => {
            return fetch(apiBaseURL + "post-requires-cookie", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
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