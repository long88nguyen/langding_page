

$(".list-comment-mobile").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplay: false,
});

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



$(".list-media").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },

        768: {
            items: 2
        },

        992: {
            items: 3
        },

        1200: {
            items: 4,
        },

        1250: {
            items: 5
        },
    }
});

$(".list-library").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 5000,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,

        },

        768: {
            items: 2,
        },

        992: {
            items: 3,
        },

        1250: {
            items: 4,
            autoplay: false,
        }
    }
});

$(".list-lecturers").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,

        },

        768: {
            items: 2,
        },

        992: {
            items: 3,
        },

        1250: {
            items: 4,
            margin: 35,
        }
    }
});

$(".list-social_ok").owlCarousel({
    loop: true,
    margin: 10,
    items: 5,
    dots: false,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },

        575: {
            items: 1
        },

        992: {
            items: 3
        },

        1200: {
            items: 4,
        },

        1250: {
            items: 5,
            autoplay: false,
        },
    }
});

$(".list-partner").owlCarousel({
    loop: true,
    margin: 10,
    items: 5,
    dots: false,
    nav: true,
    navText: ["<img src='./public/uploads/pc/back.png' />", "<img src='./public/uploads/pc/next.png' alt='Next' />"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },

        768: {
            items: 2
        },

        992: {
            items: 3
        },

        1200: {
            items: 4,
        },

        1250: {
            items: 5,
            autoplay: false,
        },
    }
});

$(".list-achievements").owlCarousel({
    loop: true,
    margin: 250,
    items: 3,
    dots: false,
    nav: true,
    navText: ["<div  class='button_prev_re'><img src='./public/uploads/pc/prev_white.png' /></div>","<div  class='button_next_re'><img src='./public/uploads/pc/next_white.png' /></div>"],
    smartSpeed: 1200,
    autoplayTimeout: 3000,
    center: true,
    autoHeight: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            center: false,
            margin: 10,
        },

        768: {
            items: 1,
            center: false,
            margin: 10,
        },

        992: {
            items: 1,
            margin: 300,
        },
        1200: {
            items: 3,
            margin: 250,
        },
    }
});