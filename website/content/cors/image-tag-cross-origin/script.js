registerDynamicContent(function() {
    const image = new Image();
    image.src = "https://assets.cors-examples.tomgregory.com/waterfall.jpg";
    image.onload = function () {
        $("#dynamic").hide().fadeIn('slow');
        $("#dynamic").append(image);
        finishDynamicContentSuccess(new URL(image.src).origin);
    }
});