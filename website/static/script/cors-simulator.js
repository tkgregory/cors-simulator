async function udpateForSuccessWithResponse(requestOrigin, response) {
    $("#try-it-out").html("Success!");
    
    const json = await response.json();

    addResponseBody(json);
    addHeaderData(response.headers);
    addOriginData(requestOrigin);
    showResponseBox();
}

async function udpateForSuccess(requestOrigin) {
    $("#try-it-out").html("Success!");
    
    addOriginData(requestOrigin);
    showResponseBox();
}

function updateForFailure(requestOrigin, error) {
    $("#try-it-out").html("Failure!");
    $("#try-it-out").addClass("red");
    addErrorData(error);
    addOriginData(requestOrigin);
    showResponseBox();
}

function addResponseBody(json) {
    $("#body").append("<div>" + json.message + "</div>").show();
}

function addHeaderData(headers) {
    headers.forEach((value, key) => {
        $('#headers').append("<div>" + key + ": <code>" + value + "</value></div>");
    });
    $('#headers').show();
}

function addErrorData(error) {
    $("#error").append("<div>" + error + "</div>").show();
}

function addOriginData(requestOrigin) {
    $("#origins").append("<div>Source origin: <code>" + new URL(window.location.href).origin + "</code></div>");
    $("#origins").append("<div>Request origin: <code>" + requestOrigin + "</code></div>");
    $("#origins").show();
}

function showResponseBox() {
    $("#response-data").hide().fadeIn('slow');
    $("#response-data").removeClass("hidden");
}

function registerDynamicContent(loadDynamicContentFunction) {
    $(document).ready(function () {
        $("#try-it-out").click(function () {
            $("#try-it-out").prop("disabled", true);
            $("#try-it-out").addClass("disabled");

            loadDynamicContentFunction();
        });
    });
}