$(document).ready(function () {
    $('.car').slick({
        autoplay: false,
        slidesToShow: 4,
        infinite: false,
        vertical: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        prevArrow: $('.up'),
        nextArrow: $('.down'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});