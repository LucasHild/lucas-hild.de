$(document).ready(function () {
  // Newsletter form
  $('#newsletter-form').on('submit', function (event) {

    // Hide (old) alert boxes
    $('#newsletter-success').hide();
    $('#newsletter-error').hide();
    $('#newsletter-success p').text('');
    $('#newsletter-error p').text('');

    // Post data to api
    $.ajax({
        data: {
          source: $('#newsletter-source').val(),
          mail: $('#newsletter-mail').val(),
        },
        type: 'POST',
        url: 'https://lanseuo.herokuapp.com/newsletter/subscribe',
      })

      .done(function (data) {
        if (data.error) {
          $('#newsletter-error').fadeIn(500);
          $('#newsletter-error').css('display', 'block');
          $('#newsletter-error p').append(data.error);
        } else {
          $('#newsletter-success').fadeIn(500);
          $('#newsletter-success').css('display', 'block');
          $('#newsletter-success p').append('Subscribed successfully!');

          // Clear input fields
          $('#newsletter-mail').val('');
        }
      });

    event.preventDefault();
  });

  // Contact Form
  $('#contact-form').on('submit', function (event) {

    // Hide (old) alert boxes
    $('#contact-success').hide();
    $('#contact-error').hide();
    $('#contact-success p').text('');
    $('#contact-error p').text('');

    // Post data to api
    $.ajax({
        data: {
          name: $('#contact-name').val(),
          mail: $('#contact-mail').val(),
          message: $('#contact-message').val(),
        },
        type: 'POST',
        url: 'https://lanseuo.herokuapp.com/mail-contact',
      })

      .done(function (data) {
        if (data.error) {
          $('#contact-error').fadeIn(500);
          $('#contact-error').css('display', 'block');
          $('#contact-error p').append(data.error);
        } else {
          $('#contact-success').fadeIn(500);
          $('#contact-success').css('display', 'block');
          $('#contact-success p').append('Message sent successfully!');

          // Clear input fields
          $('#contact-name').val('');
          $('#contact-mail').val('');
          $('#contact-message').val('');
        }
      });

    event.preventDefault();
  });

  // Close alert if button (x) is pressed
  $('.closebtn').click(function () {
    $(this).parent().fadeOut(500);
  });
});
