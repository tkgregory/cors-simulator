registerDynamicContent(function () {
    const requestURL = "https://api.cors-examples.tomgregory.com/get-misconfigured-origin";

    fetch(requestURL)
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});