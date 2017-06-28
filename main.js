$(document).ready(function () {
  $("#contact-form").on("submit", function(event) {

    // Hide (old) alert boxes
    $("#contact-success").hide();
    $("#contact-error").hide();
    $("#contact-success p").text("");
    $("#contact-error p").text("");

    // Post data to api
    $.ajax({
      data: {
        name: $("#contact-name").val(),
        mail: $("#contact-mail").val(),
        message: $("#contact-message").val()
      },
      type: "POST",
      url: "https://lucas-hild.de/fcgi-bin/api.fcgi/mail-contact"
    })

    .done(function(data) {
      if (data.error) {
        $("#contact-error").show();
        $("#contact-error").css("display", "block");
        $("#contact-error p").append(data.error);
      }
      else {
        $("#contact-success").show();
        $("#contact-success").css("display", "block");
        $("#contact-success p").append("Message sent successfully!");

        // Clear input fields
        $("#contact-name").val(""),
        $("#contact-mail").val(""),
        $("#contact-message").val("")
      }
    });

    event.preventDefault();
  });

  // Close alert if button (x) is pressed
  $(".closebtn").click(function () {
    $(this).parent().hide();
  });
});
