function formValidation()
{
var bid = document.registration.bookingid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uperson = document.registration.person;
var uphone = document.registration.phone;
var uemail = document.registration.email;
var umcar = document.registration.mcar;
var umflight = document.registration.mflight; if(bookingid_validation(bid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(allnumeric(uperson))
{ 
    if(allnumeric(uphone))
    {
    if(ValidateEmail(uemail))
    {
    if(validmode(umcar,umflight))
    {
    }
    } 
    } 
}
}
}
}
return false;
}

function bookingid_validation(bid,mx,my)
{
var bid_len = bid.value.length;
if (bid_len == 0 || bid_len >= my || bid_len < mx)
{
alert("Booking Id should not be empty / length be between "+mx+" to "+my);
bid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function allnumeric(uperson)
{ 
var numbers = /^[0-9 0-9]+$/;
if(uperson.value.match(numbers))
{
return true;
}
else
{
alert('No of persons must have numeric characters only');
uperson.focus();
return false;
}
}



function allnumeric(uphone)
{ 
var numbers = /^[0-9]+$/;
if(uphone.value.match(numbers))
{
return true;
}
else
{
alert('Phone number must have numeric characters only');
uphone.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 

function validmode(umcar,umflight)
{
x=0;

if(umcar.checked) 
{
x++;
} if(umflight.checked)
{
x++; 
}
if(x==0)
{
alert('Select Car/Flight');
umcar.focus();
return false;
}
else
{
alert('Form is modified or deleted');
window.location.reload()
return true;
}
}





