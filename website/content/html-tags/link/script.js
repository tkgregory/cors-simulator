registerDynamicContent(function () {
    const styleSheetURL = assetsBaseURL + "funky-text.css";
    const stylesheet = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: styleSheetURL,
        onload: function () {
            udpateForSuccess(new URL(styleSheetURL).origin);
        }
    });

    stylesheet.appendTo("head");
});