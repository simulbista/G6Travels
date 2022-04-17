// mouse hover on title image changes the image

// console.log("Change title image on hover using js");
let img = document.getElementById('ti');

img.addEventListener('mouseover', () => {
    img.style.backgroundImage = `url('../images/restaurants/title_image_alt.jpg')`;
})

img.addEventListener('mouseleave', () => {
    img.style.backgroundImage = `url('../images/restaurants/title_image.jpg')`;
})


//local storage - store values selected in the filter section
function displayFilter() {
    let selectedCategory;
    let e, selectedLocation, catName;

    // selectedLocation stores the location value selected
    e = document.getElementById('locationList');
    selectedLocation = e.options[e.selectedIndex].text;

    // selectedCategory stores the location value selected
    if (document.getElementById('pi').checked) {
        selectedCategory = document.getElementById('pi').value;
        catName = "Pizza";
    } else if (document.getElementById('ba').checked) {
        selectedCategory = document.getElementById('ba').value;
        catName = "Bakery";
    } else if (document.getElementById('co').checked) {
        selectedCategory = document.getElementById('co').value;
        catName = "Coffee";
    } else {
        selectedCategory = document.getElementById('fd').value;
        catName = "Fine Dining";
    }

    // storing theselected location and category in local storage
    localStorage.setItem("selectedLocation", selectedLocation);
    localStorage.setItem("selectedCategory", selectedCategory);
    console.log(localStorage);

    // displaying the selected filters back in the html page
    document.getElementById('appLocation').innerHTML = localStorage.getItem("selectedLocation");
    document.getElementById('appLocation').style.color = "yellow";
    document.getElementById('appCategory').innerHTML = catName;
    document.getElementById('appCategory').style.color = "yellow";
    localStorage.clear();

}