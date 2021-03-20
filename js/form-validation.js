

// Wait for the DOM to be ready
$(document).ready(function() {


    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: {
            required: true,
            minlength: 2
        },
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        subject: {
            required: true,
            minlength: 2
        },
        message: {
          required: true,
          minlength: 20
        }
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name and let me know how I should address you.",
        message: {
          required: "Please include a message",
          minlength: "Is that all you want to say? Please write a longer message than that"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });

    
  });