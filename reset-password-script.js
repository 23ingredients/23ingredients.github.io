$(document).ready(function() {
    // Extract userKey and email from URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var userKey = urlParams.get('userKey');
    var email = urlParams.get('email');

    $('#email_text').text('Reset password for ' + email);
  
    $("#resetForm").submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      var newPassword = $("#newPassword").val();
      var repeatPassword = $("#repeatPassword").val();

        // Validate passwords
      if (newPassword !== repeatPassword) {
        alert("Passwords do not match.");
        return;
      } else if (newPassword.length < 8) {
        alert("Your new password needs to be at least 8 character long.");
        return;
      }
  
      // Send AJAX request using jQuery
      $.ajax({
        url: "https://33cyber.net/reset-password/finish",
        type: "PUT",
        contentType: "application/json",
        data:
        JSON.stringify({
          "resetKey": userKey,
          "password": newPassword,
          "confirmPassword": repeatPassword
        }),
        success: function(response) {
          // Handle successful response
          console.log(response);
          alert("Password reset successful!");
          // Optionally redirect to a success page
        },
        error: function(error) {
          // Handle error
          console.error(error);
          alert("An error occurred while resetting password.");
        }
      });
    });
  });