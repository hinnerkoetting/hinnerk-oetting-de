// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict



    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });
        
})(jQuery); // End of use strict


function toggleMenu() {
    if ($('#menu-entries').attr('class').split(' ').includes('collapse')) {
        $('#menu-entries').attr('class', 'collapse.show navbar-collapse');
    } else {
        $('#menu-entries').attr('class', 'collapse navbar-collapse');
    }
}