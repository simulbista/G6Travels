window.onload = function(){

    document.getElementById('myProfile').onclick = validateForm2;
};



function validateForm2()
 {

    var email = document.getElementById("email");
    var contactNo = document.getElementById("contactNo");
    var lname = document.getElementById("lname");
    var fname = document.getElementById("fname");
    var i;
    var ferror = [email,contactNo,lname,fname];
    for (i = 0; i < ferror.length; i++){
        
    if (ferror[i].value.length<1) {
        ferror[i].style.backgroundColor = ' red';
 }
}
 }