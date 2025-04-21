// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

// Slick Slider JS Start
$('.home_featured_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  arrow: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1,
      }
    },
  ]
});
// Slick Slider JS End