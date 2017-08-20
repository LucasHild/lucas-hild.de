$(document).ready(function () {
  // Project tasks
  $('#project-tab-python').click(function () {
    $('#project-tab-webdesign').removeClass('tab-active');
    $('#project-tab-python').addClass('tab-active');

    $('#projects-webdesign').slideUp(1000);
    $('#projects-python').slideDown(1000);
  });

  $('#project-tab-webdesign').click(function () {
    $('#project-tab-python').removeClass('tab-active');
    $('#project-tab-webdesign').addClass('tab-active');

    $('#projects-python').slideUp(1000);
    $('#projects-webdesign').slideDown(1000);
  });

  // Hide content (won't be hidden if you have no JS)
  $('.content').css('display', 'none');

  // Fade in effect of content
  $(window).scroll(function () {
    var viewport = $(window).scrollTop() + $(window).height();
    var sections = ['information', 'skills', 'projects', 'newsletter', 'contact', 'social'];
    for (var i = 0; i < sections.length; i++) {
      var rand = $('#' + sections[i]).offset();
      rand.bottom = rand.top + $('#' + sections[i]).outerHeight();

      // If section is visible
      if (viewport > (rand.top + 350)) {
        $('#' + sections[i] + ' .content').fadeIn(1000);
        console.log('faded');
      }
    }

  });

  // Hover effect of social buttons
  $('#social-github').hover(function () {
    $(this).css('transform', 'scale(1.75)');
    $('#social-blog').css('transform', 'scale(0.75)');
    $('#social-mail').css('transform', 'scale(0.75)');
  }, function () {
    $('.social-button i').css('transform', 'scale(1)');
  });
  $('#social-blog').hover(function () {
    $(this).css('transform', 'scale(1.75)');
    $('#social-github').css('transform', 'scale(0.75)');
    $('#social-mail').css('transform', 'scale(0.75)');
  }, function () {
    $('.social-button i').css('transform', 'scale(1)');
  });
  $('#social-mail').hover(function () {
    $(this).css('transform', 'scale(1.75)');
    $('#social-github').css('transform', 'scale(0.75)');
    $('#social-blog').css('transform', 'scale(0.75)');
  }, function () {
    $('.social-button i').css('transform', 'scale(1)');
  });
});
