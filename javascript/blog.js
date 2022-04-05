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

// prevent submission of forms if there are errors
form.addEventListener('submit', (e) => {
        let messages = [];
        if (uname.value === '' || uname.value == null) {
            messages.push('Name is required!');
        }

        if (password.value.length < 6) {
            messages.push('Password must be atleast 6 characters long!');
        }

        if (password.value !== '' && password.value != passwordagain.value) {
            messages.push("Passwords don't match");
        }

        if (messages.length > 0) {
            e.preventDefault();
            formerror.innerText = messages.join('\n');
        }
    })
    // end of form validation