// https://code.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096

$(document).ready(function() {

    function getWordCount(wordString) {
        var words = wordString.split(" ");
        words = words.filter(function(words) { 
          return words.length > 0
        }).length;
        return words;
      }
      
      //add the custom validation method
      jQuery.validator.addMethod("wordCount",
         function(value, element, params) {
            var count = getWordCount(value);
            if(count >= params[0]) {
               return true;
            }
         },
         jQuery.validator.format("A minimum of {0} words is required here.")
      );

    $("#contact-form").validate({
      
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name : {
          required: true,
          minlength: 2
        },

        email: {
          required: true,
          email: true
        },
        subject: {
          required: true
          },
        message: {
          required: true,
          wordCount: ['5']
        //   minlength: 20
          },

        
      },
      
      messages : {
        name: {
            required: "Please enter your name",
          minlength: "Please enter a name that is at least 2 characters"
        },
        email: {
            required: "Please enter a valid email address",
          email: "The email should be in the format: abc@domain.tld"
        },
        subject: {
            required: "Please let me know what your message is about"
        },
        message: {
            required: "Please include a message for me to read",
        },
        
      },

      highlight: function ( element, errorClass, validClass ) {
        $( element )
            .parents( ".form__group" )
            .addClass( "error-item" )
            .removeClass( "valid-item" );
    },

    unhighlight: function (element, errorClass, validClass) {
        $( element )
            .parents( ".form__group" )
            .addClass( "valid-item" )
            .removeClass( "error-item" );
    }
   
    });
  });