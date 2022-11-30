registerDynamicContent(function () {
    const requestURL = "https://api.cors-examples.tomgregory.com/get-no-allowed-origin";

    fetch(requestURL)
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});