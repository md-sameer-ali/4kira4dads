
$(document).ready(function () {

  let $header = $('.nav-header');
  let $headerHeight = $header.outerHeight();
  let lastScrollTop = 0;
  // console.log(headerHeight);
  $(window).on('scroll', function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop && currentScrollTop > $headerHeight + 40) {
      // Scrolling down
      $header.css('top', '-' + $headerHeight + 'px');
      $header.removeClass('header_fixed')
    } else if (currentScrollTop == 0) {
      $header.removeClass('header_fixed')
    } else {
      // Scrolling up
      $header.css('top', '0');
      $header.addClass('header_fixed')
    }

    lastScrollTop = currentScrollTop;
  });


  // headerHeightPadding() function
  function headerHeightPadding() {
    let headerHeight = $(".nav-header").outerHeight();
  }
  headerHeightPadding();
  $(window).resize(function () {
    headerHeightPadding();
  });

  if ($(".count")[0]) {
    $(window).on('scroll', function () {
      let st = $(this).scrollTop(),
        vh = $(this).height(),
        $counter = $('.statistics_testimonial_wrapper'),
        ct = $counter.offset().top;
      if ((st + vh) > ct) {
        // #counter is in the viewport
        $('.count').each(function () {
          let $this = $(this),
            countTo = $this.attr('data-number');

          $({ countNum: $this.text() }).animate({
            countNum: countTo
          },

            {

              duration: 2000,
              easing: 'linear',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });


        });
      }
    })
  }


  // Select li elements that have ul as children
  $('.nav-ul li:has(ul)').each(function () {
    // Append a div to their child a tags
    $(this).children('a').append('<span class="dropdown-arrow"><i class="fa-solid fa-chevron-down"></i></span>');
  });


  if ($(window).width() <= 1920) {
    $(".nav-ul li a:has(.dropdown-arrow)").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".sub-menu")
          .slideUp(200);
      } else {
        $(".nav-ul li a:has(.dropdown-arrow)").removeClass("active");
        $(this).addClass("active");
        $(".sub-menu").slideUp(200);
        $(this)
          .siblings(".sub-menu")
          .slideDown(200);
      }
    });
  }

  $(".menu-bar").on('click', function () {
    $(".header .nav-area").addClass("mobi-nav-active");
    $(".black-overlay").fadeIn();
  });
  $(".cross").on('click', function () {
    $(".header .nav-area").removeClass("mobi-nav-active");
    $(".black-overlay").fadeOut(1000);
  });
  $(".black-overlay").on('click', function () {
    $(".header .nav-area").removeClass("mobi-nav-active");
    $(this).fadeOut(1000);
  });

  $(".faqs-area .set > a").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faqs-area .content")
        .slideUp(200);
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faqs-area .set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".faqs-area .set > a").removeClass("active");
      $(this).addClass("active");
      $(".faqs-area .content").slideUp(200);
      $(this)
        .siblings(".faqs-area .content")
        .slideDown(200);
    }

  });
  function adjustMemberDetailsPosition() {
    $(".kd_team_grid_item a").each(function () {
      let descriptionHeight = $(this).find(".member_description_area").outerHeight();
      $(this).find(".kd_team_member_details").css("top", descriptionHeight + 'px');
    });
  }

  adjustMemberDetailsPosition();

  $(window).resize(function () {
    adjustMemberDetailsPosition();
  });



});
