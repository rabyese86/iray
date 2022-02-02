
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
 }

function validateForm(){

    var email = document.contactForm.email.value;
    var name = document.contactForm.name.value;
    var mobile = document.contactForm.mobile.value;

    var emailErr = name = mobileErr = true;



    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex =/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }


 
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");

        }
    
    }
    if((nameErr || emailErr || mobileErr ) == true) {
        return false;
     } else {
      
         var dataPreview = "You've entered the following details: \n" +
                           "Full Name: " + name + "\n" +
                           "Email Address: " + email + "\n" +
                           "Mobile Number: " + mobile + "\n" +
                
         }
         
         alert(dataPreview);
        }
     };
    