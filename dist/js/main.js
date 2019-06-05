let $doc = $('html, body');
$('.nav-link').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


if($(window).width() > 991) {
	$('.carousel-image').height($(window).height() - 56);
    $(window).resize(function () {
        $('.carousel-image').height($(window).height() - 56);
    });
    } else {
    $('.carousel-image').height($(window).height() - 56);
    $(window).resize(function () {
        $('.carousel-image').height($(window).height() - 56);
    });
}

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".main-menu").addClass("fixed-top");
        } else {
            $(".main-menu").removeClass("fixed-top");
        }
    });
});

function fontSize(e) {
    let elements = [];
    
    elements[0] = $('p');
    elements[1] = $('h1');
    elements[2] = $('h2');
    elements[3] = $('h4');
    elements[4] = $('h6');

    for(let i = 0; i < elements.length; i++) {
        let font = elements[i].css('font-size');
    
        if(e == 'a') {
            elements[i].css("fontSize", parseInt(font) + 1);
        } else if(e == 'd') {
            elements[i].css("fontSize", parseInt(font) - 1);
        }
    }
}