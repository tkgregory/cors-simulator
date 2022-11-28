registerDynamicContent(function () {
    const javscriptURL = "https://assets.cors-examples.tomgregory.com/time.js";
    const javscript = $("<script>", {
        src: javscriptURL,
        type: "text/javascript",
        onload: function () {
            $("#dynamic").hide().fadeIn('slow');
            finishDynamicContent(new URL(javscriptURL).origin);
        }
    });

    javscript.appendTo("head");
});