(function ($) {
    "use strict";


    let bool = localStorage.getItem("value")





    $(document).ready(function(){
        if (bool == "est") {
            $('.input3-select').slideDown(300);

            document.getElementById("textArea").placeholder = "Job Details";
            document.getElementById("radio1").checked = false;
            document.getElementById("radio2").checked = true;
        }
        else if (bool == "con"){

            $('.input3-select').slideUp(300);
            document.getElementById("textArea").placeholder = "Your Message";
            document.getElementById("radio1").checked = true;
            document.getElementById("radio2").checked = false;

            }

    })


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

    /*==================================================================
    [ Chose Radio ]*/
    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
            document.getElementById("textArea").placeholder = "Your Message";
        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
            document.getElementById("textArea").placeholder = "Job Details";
        }
    });



    //What I added
    $(document).ready(function() {

        $("#jobType").change(function() {

            var el = $(this) ;

            if(el.val() === "Fence Installation" || el.val() === "Fence Staining") {
                document.getElementById("feet").placeholder = "Linear Feet";
            }
            else {
                document.getElementById("feet").placeholder = "Square Feet"; }

        });

    });
        
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);