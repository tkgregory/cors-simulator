registerDynamicContent(function () {
    const requestURL = "https://api.cors-simulator.tomgregory.com/post-no-options-api";

    fetch(requestURL, {
        method: 'POST',
        headers: {"Content-type": "application/json"}
    })
        .then((response) => {
            udpateForSuccessWithResponse(new URL(requestURL).origin, response);
        })
        .catch((error) => {
            updateForFailure(new URL(requestURL).origin, error);
        });
});