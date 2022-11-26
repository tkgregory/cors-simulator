function finishDynamicContent(requestOrigin) {
    $("#dynamic").append("<p>&#9989; Request successful</p>");
    $("#source-origin").html(new URL(window.location.href).origin);
    $("#request-origin").html(requestOrigin);
    $("#origins").hide().fadeIn('slow')
    $("#origins").removeClass("hidden");
}

function registerDynamicContent(callbackFunction) {
    $(document).ready(function () {
        $("#try-it-out").click(function () {
            $("#try-it-out").prop("disabled", true);
            $("#try-it-out").hide();

            const image = new Image();
            image.src = "https://assets.cors-examples.tomgregory.com/waterfall.jpg";
            image.onload = function () {
                finishDynamicContent(new URL(image.src).origin);
            }

            $("#dynamic").hide().fadeIn('slow');
            $("#dynamic").append(image);
        });
    });
}