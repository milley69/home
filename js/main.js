// for input phone
$(document).ready(function() {
  $(".phone").mask("+7 (999) 99-99-999");
});

// owlCarousel 2
$(document).ready(function() {
  $("#owl-1").owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    freeDrag: true,
    mouseDrag: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  $("#owl-2, #owl-3").owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    freeDrag: true,
    mouseDrag: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
});

// tabs
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
