console.log("Changes the like button when clicked");

var like = document.getElementById('like-button');

like.addEventListener('click', function(like) {
    like.target.classList.toggle('like');
})