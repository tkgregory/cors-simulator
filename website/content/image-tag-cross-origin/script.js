registerDynamicContent(function() {
    const image = new Image();
    image.src = assetsBaseURL + "waterfall.jpg";
    image.className = "centred"
    image.onload = function () {
        $("#dynamic").append(image);
        udpateForSuccess(new URL(image.src).origin);
    }
});