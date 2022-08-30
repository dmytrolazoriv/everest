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

    $(".main-nav__button").on("click", function (event) {
        event.stopPropagation();
        $(this).toggleClass("active");
        $(".catalog__modal").toggleClass("activeModal");
        $(".overlay").toggleClass("active");
    });

    $(".main-nav__button").on("keyup", function (event) {
        event.stopPropagation();
        if (event.key === "Escape") {
            $(".catalog__modal").removeClass("activeModal");
            $(".main-nav__button").removeClass("active");
            $(".overlay").removeClass("active");
        }
    });

    $(document).on("click", function (event) {
        if ($(event.target).closest($(".catalog__modal")).length != 0) return;
        // if ($(event.target).closest($(".catalog__modal")).length != 0) return false;
        $(".catalog__modal").removeClass("activeModal");
        $(".main-nav__button").removeClass("active");
        $(".overlay").removeClass("active");
        // Check if the filter list parent element exist
        // var isClosest = event.target.closest(modalSelector);

        // If `isClosest` equals falsy & popup has the class `show`
        // then hide the popup
        // if (!isClosest && modalEl.hasClass("active")) {
        //     $(".catalog__modal").removeClass("active");
        //     $(".main-nav__button").removeClass("active");
        //     $(".overlay").removeClass("active");
        // }
    });

    $(".menu__btnclose").on("click", function () {
        $(".catalog__modal").removeClass("activeModal");
        $(".main-nav__button").removeClass("active");
        $(".overlay").removeClass("active");
    });
});
