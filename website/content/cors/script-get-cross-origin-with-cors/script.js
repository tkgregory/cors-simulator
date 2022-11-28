registerDynamicContent(function () {
    const requestURL = "https://api.cors-examples.tomgregory.com/get-with-cors";

    fetch(requestURL)
        .then((response) => response.json())
        .then((data) => $("#response").html(data.message))
        .then(() => finishDynamicContentSuccess(new URL(requestURL).origin))
        .catch(function (error) {
            $("#response").html("Got error: \"" + error + "\"\nCheck the Developer Console");
            finishDynamicContentFailure(new URL(requestURL).origin);
        });
});