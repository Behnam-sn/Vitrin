$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 88) {
        $("#stick").addClass("shadow");
    } else {
        $("#stick").removeClass("shadow");
    }
});