window.onload = function(){

    document.getElementById('submit').onclick = validateForm;
    document.getElementById('signUp').onclick = validateForm1;
};

function validateForm()
 {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var i;
    var ferror = [username,password];
    for (i = 0; i < ferror.length; i++){
        
    if (ferror[i].value.length<1) {
        ferror[i].style.backgroundColor = ' red';
        
   }

    }    
}

function validateForm1()
 {

    var email = document.getElementById("email");
    var contactNo = document.getElementById("contactNo");
    var username = document.getElementById("username");
    var orgpassword = document.getElementById("orgpassword");
    var lname = document.getElementById("lname");
    var fname = document.getElementById("fname");
    var i;
    var ferror = [email,contactNo,username,orgpassword,lname,fname];
    for (i = 0; i < ferror.length; i++){
        
    if (ferror[i].value.length<1) {
        ferror[i].style.backgroundColor = ' red';
 }

    }   
}


