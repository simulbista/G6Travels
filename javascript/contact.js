 function ValidateEmail() {
        var email = document.getElementById("email").value;
    //email format regix
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //if email format match
    if (email.match(mailformat)) {
        return true;
    } else if (email == ("")) {
        alert("Please Enter Your Email Address!");
        return false;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

//for user name validation
function validateName()
{
    var userName = document.getElementById("name").value;

    if (userName.search(/^(?!.* )/)) {
        alert("Your User Name must not contain space.");
        return false;
    }

    else if(userName.search(/^[^0-9]+$/)){
        alert("Your User Name must not contain Any digit.");
        return false;
    }
    else if (userName == ("")) {
        alert("Enter User Name");
        return false;
    }
    else {
        return true;
    }
}
