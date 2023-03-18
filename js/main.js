$(document).ready(function () {
  $("#history_2010").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#event_2010").offset().top,
      },
      10
    );
  });

  $("#history_2015").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#event_2015").offset().top,
      },
      10
    );
  });

  $("#history_2020").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#event_2020").offset().top,
      },
      10
    );
  });

  if (scroll > $('.content_wr').position().top && scroll < $('.review_image').position().top) {
    $('.content_wr .content_timeline-left').css('opacity', '1');
  }
  else {
    $('.content_wr .content_timeline-left').css('opacity', '0');
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > $('.content_wr').position().top && scroll < $('.review_image').position().top) {
      $('.content_wr .content_timeline-left').css('opacity', '1');
    }
    else {
      $('.content_wr .content_timeline-left').css('opacity', '0');
    }
  });

  $('#event_2015').position().top;

  $(window).scroll(function () {
    var position_scroll = $(window).scrollTop();
    position_scroll < $('#event_2015').position().top
      ? $("#history_2010").addClass("position_scroll")
      : $("#history_2010").removeClass("position_scroll");

    position_scroll >= $('#event_2015').position().top && position_scroll < $('#event_2020').position().top
      ? $("#history_2015").addClass("position_scroll")
      : $("#history_2015").removeClass("position_scroll");

    position_scroll >= $('#event_2020').position().top
      ? $("#history_2020").addClass("position_scroll")
      : $("#history_2020").removeClass("position_scroll");
  });

  $(window).scroll(function () {
    var position_scroll_animate = $(window).scrollTop();
    var width = $(window).width();
    if (width > 1000) {
      if (position_scroll_animate > 900) {

        TweenMax.to(".item_2010_1 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2010_1 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2010_2 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2010_2 .content_event--2010-item-img",
          0.2,
          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );

        TweenMax.to(".item_2010_3 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 2.5,
        });

        TweenMax.to(".item_2010_3 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3,
        });

        TweenMax.to(".item_2010_4 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3.5,
        });

        TweenMax.to(
          ".item_2010_4 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 4 }
        );
      }

      if (position_scroll_animate > 3400) {
        TweenMax.to(".item_2010_5 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2010_5 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2010_6 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2010_6 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );

        TweenMax.to(".item_2010_7 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 2.5,
        });

        TweenMax.to(".item_2010_7 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3,
        });

        TweenMax.to(".item_2010_8 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3.5,
        });

        TweenMax.to(
          ".item_2010_8 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 4 }
        );
      }

      if (position_scroll_animate > 5800) {
        TweenMax.to(".item_2020_1 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2020_1 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2020_2 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2020_2 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );


      }
    }

  });

  function ReloadScroll() {

    var current_Scroll = ($(window).scrollTop());
    var width = $(window).width();


    if (width > 1000) {
      if (current_Scroll > 900) {
        TweenMax.to(".item_2010_1 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2010_1 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2010_2 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2010_2 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );

        TweenMax.to(".item_2010_3 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 2.5,
        });

        TweenMax.to(".item_2010_3 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3,
        });

        TweenMax.to(".item_2010_4 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3.5,
        });

        TweenMax.to(
          ".item_2010_4 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 4 }
        );
      }

      if (current_Scroll > 3400) {
        TweenMax.to(".item_2010_5 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2010_5 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2010_6 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2010_6 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );

        TweenMax.to(".item_2010_7 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 2.5,
        });

        TweenMax.to(".item_2010_7 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3,
        });

        TweenMax.to(".item_2010_8 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 3.5,
        });

        TweenMax.to(
          ".item_2010_8 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 4 }
        );
      }

      if (current_Scroll > 5800) {
        TweenMax.to(".item_2020_1 .content_event--2010-item-img", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 0.5,
        });

        TweenMax.to(".item_2020_1 .content_event--2010-item-content", 0.2, {
          marginLeft: "50%",
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1,
        });

        TweenMax.to(".item_2020_2 .content_event--2010-item-content", 0.2, {
          paddingLeft: 0,
          alpha: 1,
          ease: Power4.easeOut,
          delay: 1.5,
        });

        TweenMax.to(
          ".item_2020_2 .content_event--2010-item-img",
          0.2,

          { marginLeft: "50%", alpha: 1, ease: Power4.easeOut, delay: 2 }
        );


      }
    }
  }

  ReloadScroll();

});
