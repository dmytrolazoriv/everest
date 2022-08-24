$(function () {
    $(".main-slider___list").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: $(".main-slider__control_next"),
        prevArrow: $(".main-slider__control_prev")
    });


    $('.main-nav__burger').on("click", function (event) {
        $('.main-nav__burger, .main-nav').toggleClass('active');
        if ($(".main-nav").hasClass("active")) {
            $(".main-nav__burger:last-child").css("display", "none");
            $(".main-nav__burger:first-child").css({
                "margin-bottom": "0px",
                "align-self": "flex-end"
            });
        } else {
            $(".main-nav__burger:last-child").css("display", "block");
        }
    });
});