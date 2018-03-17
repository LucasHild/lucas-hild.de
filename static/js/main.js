$(window).ready(function() {
  // Fade in and out header arrow
  setInterval(function() {
    $('#header-arrow').fadeOut();
    setTimeout(function() {
      $('#header-arrow').fadeIn();
    }, 250)
  }, 2000);

  $(window).scroll(function(event) {
    $('nav').css('position', 'fixed');
    if ($(window).scrollTop() > 69) {
      $('nav').addClass('nav-blue')
    } else {
      $('nav').removeClass('nav-blue')
    }
  });

  $('#mail-link').attr('href', 'mailto:co' + 'ntact@lu' + 'cas.hild.def'.substring(0, 12 - 1));

  $('#open-mobile-nav').click(function() {
    $('#mobile-nav-window').animate({width:'toggle'},350);
    // $('#mobile-nav-window').addClass('mobile-nav-window-open');
  });

  $('#close-mobile-nav').click(function() {
    // $('#mobile-nav-window').removeClass('mobile-nav-window-open');
    $('#mobile-nav-window').animate({width:'toggle'},350);
  });

  $('#mobile-nav-window-links a').click(function() {
    $('#mobile-nav-window').hide();
  })
});
