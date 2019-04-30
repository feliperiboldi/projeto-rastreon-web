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