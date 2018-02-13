/*///////////////////
//	   GENERAL     //
///////////////////*/
$('.article-author').hide();
$('#article-2').hide();
var article_img_height = $("#article-1-img").outerHeight();
var window_height = $(window).height();
var document_height = $(document).height();
var article = 1;

$(document).ready(function() {
    $('.article-info').css('top', article_img_height);
    var article_info_height = $('.article-info').outerHeight();
    $('.article').css('padding-top', article_info_height);
    confirm("Hi there! You can swipe left or right on the main image to change articles.");
});


/*///////////////////
//  SCROLL EVENTS  //
///////////////////*/
$(window).scroll(function(event) {
    var scroll_position = $(window).scrollTop();
    var scroll_up_buttn_offset = $('#scroll-up-bttn').offset();

    if (scroll_up_buttn_offset.top > (document_height - 60)) {
        $('#scroll-up-bttn').css('bottom', '80px');
    } else {
        $('#scroll-up-bttn').css('bottom', '10px');
    }

    if (scroll_position > 20) {
        $('.article-info').css('text-align', 'left');
        $('.article-info').css('margin-left', '5%');

        $('.article-source').fadeOut(500);
        $('.article-author').fadeIn(500);

    } else {
        $('.article-info').css('text-align', 'center');
        $('.article-info').css('margin-left', '9%');

        $('.article-author').fadeOut(1000);
        $('.article-source').fadeIn(1000);
    }

    if (scroll_position > (article_img_height / 2)) {
        $('#scroll-up-bttn').css('opacity', 1);
    } else {
        $('#scroll-up-bttn').css('opacity', 0);
    }
});

$('#scroll-up-bttn').click(function() {
    $("html, body").animate({
        scrollTop: "0px"
    });
});

/*///////////////////
//    ORDR BTTN    //
///////////////////*/
$(".ordr-now-bttn").click(function() {
    confirm("When clicking on this button, you will be taken to a page where you can order this food to be delivered, or view the entire resturaunt in Ordr.");
});

/*///////////////////
//  SWITCH EVENTS  //
///////////////////*/
$("#article-1-img").on("swipe", function() {
    $("#article-2").fadeIn(750);
    $("#article-1").fadeOut(750, function() {
        document_height = $(document).delay(100).height();
    });
    article = 2;
});

$("#article-2-img").on("swipe", function() {
    $("#article-1").fadeIn(750);
    $("#article-2").fadeOut(750, function() {
        document_height = $(document).delay(100).height();
    });
    article = 1;
});


$("#article-1-img").click(function() {
    $("#article-2").fadeIn(750);
    $("#article-1").fadeOut(750, function() {
        document_height = $(document).delay(100).height();
    });
    article = 2;
});

$("#prev-button, #next-button").click(function() {
    if (article == 1) {
        $("html, body").animate({
            scrollTop: "0px"
        }, function() {
            $("#article-1").fadeOut(750);
            $("#article-2").fadeIn(750, function() {
                document_height = $(document).delay(200).height();
                article = 2;
            });
        });
    } else {
        $("html, body").animate({
            scrollTop: "0px"
        }, function() {
            $("#article-2").fadeOut(750);
            $("#article-1").fadeIn(750, function() {
                document_height = $(document).delay(200).height();
                article = 1;
            });
        });
    }
});
