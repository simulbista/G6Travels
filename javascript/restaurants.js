// mouse hover on title image changes the image

console.log("Change title image on hover using js");
let img = document.getElementById('ti');

img.addEventListener('mouseover', () => {
    img.style.backgroundImage = `url('../images/restaurants/title_image_alt.jpg')`;
})

img.addEventListener('mouseleave', () => {
    img.style.backgroundImage = `url('../images/restaurants/title_image.jpg')`;
})

console.log(img1);