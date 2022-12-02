registerDynamicContent(function () {
    const javscriptURL = assetsBaseURL + "time.js";
    const javscript = $("<script>", {
        src: javscriptURL,
        type: "text/javascript",
        onload: function () {
            udpateForSuccess(new URL(javscriptURL).origin);
        }
    });

    javscript.appendTo("head");
});