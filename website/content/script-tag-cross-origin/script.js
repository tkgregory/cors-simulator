registerDynamicContent(function () {
    const javscriptURL = "https://assets.cors-simulator.tomgregory.com/time.js";
    const javscript = $("<script>", {
        src: javscriptURL,
        type: "text/javascript",
        onload: function () {
            udpateForSuccess(new URL(javscriptURL).origin);
        }
    });

    javscript.appendTo("head");
});