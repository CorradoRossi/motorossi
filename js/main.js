(function(a) {
  a.fn.windowHeight = function() {
    return this.each(function() {
      var b = a(window).height();
      a(this).height(b)
    })
  }
})(jQuery);
$(document).ready(function() {
  $.localScroll();
  $(".winsize").windowHeight();
  $(window).resize(function() {
    $(".winsize").windowHeight()
  });
  $("#hamburger, #closenav").click(function() {
    var a = $("#hamburger");
    a.hasClass("opened") ? $("#navslide").delay(300).animate({
      left: -200
    }, 300, function() {
      $("#navmain").fadeOut(300);
      a.removeClass("opened");
      $("body").removeClass("overflow")
    }) : (a.addClass("opened"), $("body").addClass("overflow"), $("#navmain").fadeIn(300), $("#navslide").delay(300).animate({
      left: 0
    }, 300))
  });
  $("#maincontent").waypoint(function(a) {
    "down" ===
    a ? $("#nav-fixed").fadeIn(400) : "up" === a && $("#nav-fixed").fadeOut(400)
  }, {
    offset: "20%"
  });
  $("#career").waypoint(function(a) {
    "down" === a ? ($("#sidenav a").removeClass("active"), $("#nav-career").addClass("active")) : "up" === a && $("#sidenav a").removeClass("active")
  }, {
    offset: "20%"
  });
  $("#works").waypoint(function(a) {
    "down" === a ? ($("#sidenav a").removeClass("active"), $("#nav-works").addClass("active")) : "up" === a && ($("#sidenav a").removeClass("active"), $("#nav-career").addClass("active"))
  }, {
    offset: "20%"
  });
  $("#contact").waypoint(function(a) {
    "down" ===
    a ? ($("#sidenav a").removeClass("active"), $("#nav-contact").addClass("active")) : "up" === a && ($("#sidenav a").removeClass("active"), $("#nav-works").addClass("active"))
  }, {
    offset: "20%"
  })
});
$(window).load(function() {
  $("#preloader .hlogo").fadeOut();
  $("#preloader").delay(150).fadeOut("slow", function() {
    $("body").removeClass("overflow");
    TweenMax.to($("#animate01"), .6, {
      css: {
        opacity: 1,
        top: 0
      },
      ease: Power2.ease,
      onComplete: function() {
        TweenMax.to($("#animate02"), .6, {
          css: {
            opacity: 1,
            top: 0
          },
          ease: Power2.ease
        })
      }
    })
  })
});
