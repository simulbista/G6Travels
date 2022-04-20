  //Clear search form
  function clearForm(){
    document.getElementById("search_form").reset();
}

//Slider script
var slide_index = 1;  
displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
        if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
}  


//change color
function changeTitileColor(){
    document.getElementById("page_title").style.color = "red";
}

//change title color by select option
function newTitleColor(){
    var selectedColor = document.getElementById("mycolor").value;
    document.getElementById("page_title").style.color = selectedColor;
}

//Change title background color by select
function newTitleBg(){
    var selectedBg = document.getElementById("bgColor").value;
    document.getElementById("page_title").style.background = selectedBg;
}

//Show and hide slider title
function sliderChange(type) {
    document.getElementById("slider").style.visibility = type;
}