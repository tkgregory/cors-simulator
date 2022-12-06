registerDynamicContent(function () {
    const requestURL = apiBaseURL + "/post-success";

    fetch(requestURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
        .then((response) => {
            updateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});