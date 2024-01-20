$(document).ready(function() {
    // Extract userKey and email from URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var userKey = urlParams.get('userKey');
    var email = urlParams.get('email');
  
    $("#resetForm").submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      var newPassword = $("#newPassword").val();
      var repeatPassword = $("#repeatPassword").val();

        // Validate passwords
      if (newPassword !== repeatPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      // Send AJAX request using jQuery
      $.ajax({
        url: "https://example.com/reset",
        type: "POST",
        data: {
          newPassword: newPassword,
          userKey: userKey,
          email: email // Include email in the data object
        },
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