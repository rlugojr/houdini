/* =============================================================
    Houdini v2.0
    A simple collapse and expand widget.
    Script by Chris Ferdinandi - http://gomakethings.com
    Licensed under WTFPL - http://www.wtfpl.net/
 * ============================================================= */

(function($) {
    $(function () {
        $('.collapse-toggle').click(function(e) { // When a link or button with the .collapse-toggle class is clicked
            e.preventDefault(); // Prevent the default action from occurring
            var dataID = $(this).attr('data-target'); // Get the ID of the target element
            $(dataID).toggleClass('active'); // Add or remove the '.active' class from the target element
        });
    });
})(jQuery);





/* =============================================================
    js-accessibility.js
    Adds .js class to <body> for progressive enhancement.
    Script by Chris Ferdinandi - http://gomakethings.com
    Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

(function($) {
    $(function () {
        $('body').addClass('js'); // On page load, add the .js class to the <body> element.
    });
})(jQuery);
