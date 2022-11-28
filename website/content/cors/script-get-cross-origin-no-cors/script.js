registerDynamicContent(function () {
    const requestURL = 'https://api.cors-examples.tomgregory.com/get-without-cors';
    
    fetch()
        .then((response) => response.json())
        .then((data) => $("#response").html(data))
        .catch(function (error) {
            $("#response").html("Got error: \"" + error + "\"\nCheck the Developer Console");
            finishDynamicContentFailure(new URL(requestURL).origin);
        });
});