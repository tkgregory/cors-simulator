registerDynamicContent(function () {
    fetch('https://api.cors-examples.tomgregory.com/get-without-cors')
        .then((response) => response.json())
        .then((data) => $("#response").html(data))
        .catch(function (error) {
            console.log(error);
            $("#response").html("Got error: \"" + error + "\"\nCheck the Developer Console");
        });
});