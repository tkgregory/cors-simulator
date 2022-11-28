function finishDynamicContent(requestOrigin) {
    $("#dynamic").append("<p>&#9989; Request successful</p>");
    $("#source-origin").html(new URL(window.location.href).origin);
    $("#request-origin").html(requestOrigin);
    $("#origins").hide().fadeIn('slow')
    $("#origins").removeClass("hidden");
}

function registerDynamicContent(loadDynamicContentFunction) {
    $(document).ready(function () {
        $("#try-it-out").click(function () {
            $("#try-it-out").prop("disabled", true);
            $("#try-it-out").hide();

            loadDynamicContentFunction();
        });
    });
}