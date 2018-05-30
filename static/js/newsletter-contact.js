$(document).ready(function () {
    // Contact Form
    $('#contact-form').on('submit', function (event) {
        $('#contact-spinner').show();

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
                $('#contact-spinner').hide();
                if (data.error) {
                    $('#contact-alert').css('border', '3px solid rgb(218, 13, 61)');
                    $('#contact-alert p').append(data.error);
                } else if (data.success == 'sent') {
                    $('#contact-alert').css('border', '3px solid rgb(66, 181, 131)');
                    $('#contact-alert p').append('Message sent successfully!');

                    // Clear input fields
                    $('#contact-name').val('');
                    $('#contact-mail').val('');
                    $('#contact-message').val('');
                }
                $('#contact-alert').fadeIn(500);
                $('#contact-alert').css('display', 'block');
            });

        event.preventDefault();
    });

    // Close alert if button (x) is pressed
    $('.closebtn').click(function () {
        $(this).parent().fadeOut(500);
    });
});
