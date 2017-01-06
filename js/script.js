//SCROLL EFFECT
$(".nav-link").click(function () {
  var href = $(this).attr('href');
  scrollAmount = 0;
  if (href == "#home")
    scrollAmount = 0;
  else
    scrollAmount = $(href).offset().top - 65;

  $('html, body').animate({
    scrollTop: scrollAmount
  }, 1000);
});

//CLOSE COLLAPSE NAV WHEN CLICKING OUTSIDE

$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".collapse").hasClass("collapse in");

    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
});