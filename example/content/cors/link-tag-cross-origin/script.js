registerDynamicContent(function () {
    const styleSheetURL = "https://assets.cors-examples.tomgregory.com/funky-text.css";
    const stylesheet = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: styleSheetURL,
        onload: function () {
            $("#dynamic").hide().fadeIn('slow');
            finishDynamicContent(new URL(styleSheetURL).origin);
        }
    });

    stylesheet.appendTo("head");
});