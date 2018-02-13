/*adapt the margins of the browser previews to different screen sizes
function adaptBrowserPreview() {
    var browser_container_height = $("#watson-block").outerHeight();
    var watson_height = $("#watson-preview").outerHeight();
    var browser_offset = (browser_container_height - watson_height + 1);

    var budgie_container_height = $("#budgie-block").outerHeight();
    var budgie_height = $("#budgie-logo").outerHeight();
    var budgie_offset = ((budgie_container_height - budgie_height) / 2);

    if (browser_offset > 0) {
        $("#watson-preview").css('margin-top', browser_offset);
        $("#smc-preview").css('margin-top', browser_offset);
        $("#budgie-logo").css('margin-top', budgie_offset);
    } else {
        $("#watson-preview").css('margin-top', 0);
        $("#smc-preview").css('margin-top', 0);
        $("#budgie-logo").css('margin-top', 0);
    };
}

// init adaptation
adaptBrowserPreview();


// adjust the previews on resize
$(window).resize(function() {
    adaptBrowserPreview();
});
