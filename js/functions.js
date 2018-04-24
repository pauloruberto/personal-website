// track if burger is open or not
var hamburger_open = 0;


$( document ).ready(function() {
    var page = window.location.pathname;

    // set the nav bar to display current page
    if(page == '/about' || page == '/about.html'){
      $("#link1").css('opacity', '0.25');
    } else if(page == '/' || page == '/index.html' || page == '/index'){
      $("#link3").css('opacity', '0.25');
    }
});

// when the hamburger is clicked
$("#hamburger-button").click(function() {
    var headline_height = $("#headline").outerHeight();

    if (hamburger_open == 0) {
        $('#nav').css('height', headline_height);

        $(".nav-link").css('visibility', 'visible');
        $(".nav-link").css('transition', '0.3s');
        $(".nav-link").css('opacity', '1');
        $("#nav-links").css('visibility', 'visible');

        hamburger_open = 1;
    } else {
        $('#nav').css('height', '70px');

        $(".nav-link").css('visibility', 'hidden');
        $(".nav-link").css('opacity', '0');
        $(".nav-link").css('transition', '0.3s');
        $("#nav-links").css('visibility', 'hidden');

        hamburger_open = 0;
    }
});

// get the width of the open window
var width = $(window).width();

// run functions on window resize
$(window).resize(function() {
    width = $(window).width();

    if ((width >= 640) && (hamburger_open == 1)) {
        $(".nav-link").css('transition', '0s');
        $('#nav').css('height', '70px');
    }
});
