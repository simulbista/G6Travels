// like button effect
console.log("Changes the like button when clicked");

var like = document.getElementById('like-button');

like.addEventListener('click', function(like) {
    like.target.classList.toggle('like');
})

// end of like button effect


//form validation
let uname = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordagain = document.getElementById('passwordagain');
let form = document.getElementById('form');
let formerror = document.getElementById('formerror');

form.addEventListener('submit', (e) => {
        let messages = [];
        if (uname.value === '' || uname.value == null) {
            messages.push('Name is required!');
        }

        if (ValidateEmail(email) == false) {
            messages.push('Invalid email address');
        }

        if (password.value.length < 6) {
            messages.push('Password must be atleast 6 characters long!');
        }

        if (password.value !== '' && password.value != passwordagain.value) {
            messages.push("Passwords don't match");
        }
        // prevent submission of forms if there are errors
        if (messages.length > 0) {
            e.preventDefault();
            // adding new line for each error messages
            formerror.innerText = messages.join('\n');
        }
    })
    // end of form validation

//email validation function
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }

}