registerDynamicContent(function() {
    const image = new Image();
    image.src = assetsBaseURL + "waterfall.jpg";
    image.onload = function () {
        $("#dynamic").html(image);
        udpateForSuccess(new URL(image.src).origin);
    }
});