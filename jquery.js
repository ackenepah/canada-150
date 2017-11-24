function animateLogo() {
  $('.can-150').toggleClass('closed');
}

$('html').on('click', animateLogo);
$(window).on('load', animateLogo);
