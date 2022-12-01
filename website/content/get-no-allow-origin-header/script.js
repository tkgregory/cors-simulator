registerDynamicContent(function () {
    const requestURL = "https://api.cors-simulator.tomgregory.com/get-no-allow-origin-header";

    fetch(requestURL)
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});