$(document).ready(function (e) {
  /* preloader */
  var Body = $("body");
  Body.addClass("preloader-site");

  /* cookie popup modal */
  $('#cookieModal').fadeIn(450);
  $(".notice .btn").on("click", function (e) {
    $("#cookieModal").fadeOut(350);
    e.preventDefault();
  });

  /* page animation */
  AOS.init({
    duration: 1200,
    easing: "ease",
    anchorPlacement: "top",
    once: true,
  });


  /* carousel speed duration change */
  $('.carousel').carousel({
    interval: 6400
  })

  /* navigation click actions */
  $(".nav-link[href='#']").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });

  /* scroll function */
  function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var navbarNav = $("#navbarNav");
    var toggleButton = $(".navbar-toggler");
    $("html,body").animate({
      scrollTop: targetOffset
    }, speed);
    if (navbarNav.hasClass("show")) {
      navbarNav.css("height", "1px").removeClass("show").addClass("collapse");
      toggleButton.addClass("collapsed").attr("aria-expanded", "false");
      navbarNav.removeClass("show");
    }
  }

  /* sticky navigationBar section start */
  // var navigationBar = $("#navigationBar");
  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   // console.log(scroll);
  //   if ($(window).width() > 992) {
  //     if ((scroll > 1070) && (scroll < 1080)) {
  //       navigationBar.addClass("absolute-top-zero");
  //     } else if (scroll >= 1080) {
  //       navigationBar.addClass("navbar-fixed");
  //       $(".navigation-bar").addClass("light-nav");
  //     } else {
  //       navigationBar.removeClass("navbar-fixed");
  //       navigationBar.removeClass("absolute-top-zero");
  //       $(".navigation-bar").removeClass("light-nav");
  //     }
  //   } else {
  //     if (scroll > 100) {
  //       $(".navigation-bar").addClass("light-nav");
  //     } else {
  //       $(".navigation-bar").removeClass("light-nav");
  //     }
  //   }
  // });

  var navigationBar = $("#navigationBar");
  var stickyNavigationBar = navigationBar.offset().top;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    console.log(stickyNavigationBar);
    if ($(window).width() > 992) {
      if ((scroll >= (stickyNavigationBar)) && (scroll < (stickyNavigationBar + 80))) {
        navigationBar.addClass("absolute-top-zero");
      } else {
        navigationBar.removeClass("absolute-top-zero");
      }

      if (scroll >= (stickyNavigationBar + 80)) {
        navigationBar.addClass("navbar-fixed");
        $(".navigation-bar").addClass("light-nav");
      } else {
        navigationBar.removeClass("navbar-fixed");
        // navigationBar.removeClass("absolute-top-zero");
        $(".navigation-bar").removeClass("light-nav");
      }
    } else {
      if (scroll > 100) {
        $(".navigation-bar").addClass("light-nav");
      } else {
        $(".navigation-bar").removeClass("light-nav");
      }
    }
  });
  /* sticky navigationBar section close */


  /* Highlight current page start */

  // Get current page URL
  var url = window.location.href;

  // remove # from URL
  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

  // remove parameters from URL
  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

  // select file name
  url = url.substr(url.lastIndexOf("/") + 1);

  // If file name not avilable
  if (url == '') {
    url = 'index.html';
  }

  // Loop all menu items
  $('ul.navbar-nav li.nav-item').each(function () {

    // select href
    var href = $(this).find('a').attr('href');

    // Check filename
    if (url == href) {

      // Add active class
      $(this).addClass('active');
    }
  });
  /* Highlight current page close */

  /* scrollSpy and add/remove active class */
  var sections = $("section"),
    nav = $("nav"),
    navUl = $("ul.nav.navbar-nav"),
    nav_height = navUl.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        navUl.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        navUl.find('a[data-id="' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  // var progressPath = document.querySelector(
  //   ".progress-wrap path#progress-indicator"
  // );
  // var pathLength = progressPath.getTotalLength();
  // progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  // progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  // progressPath.style.strokeDashoffset = pathLength;
  // progressPath.getBoundingClientRect();
  // progressPath.style.transition = progressPath.style.WebkitTransition =
  //   "stroke-dashoffset 10ms linear";
  // var updateProgress = function () {
  //   var scroll = $(window).scrollTop();
  //   var height = $(document).height() - $(window).height();
  //   var progress = pathLength - (scroll * pathLength) / height;
  //   progressPath.style.strokeDashoffset = progress;
  // };
  // updateProgress();

  // $(window).scroll(updateProgress);
  var offset = 200;
  var duration = 550;
  $(window).on("scroll", function () {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, duration);
    return false;
  });

  /* cookie popup modal */
  $('#cookieModal').delay(1200).fadeIn(450);
  $(".notice .btn").on("click", function (e) {
    $("#cookieModal").fadeOut(200);
    e.preventDefault();
  });
});

$(window).on("load", function () {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");

  /* advertisement popup modal */
  setTimeout(function () {
    $("#advertisementModal").modal('show');
  }, 5000);
});