
const sourceLoc = document.getElementById("from");
const destinationLoc = document.getElementById("to");
const depDate = document.getElementById("depDate");
const returnDate = document.getElementById("returnDate");
const passengerCount = document.getElementById("passengerCount");

//handle go back
const goBackToLanding = () => {
    window.location.replace("http://127.0.0.1:5500/pages/travel.html");
};

//validate the data before moving to next page
const searchFlights = (e) => {
    e.stopPropagation();
    e.preventDefault();
    clearErrorBorders();
    const isFormValid = validateForm();
    if(isFormValid)
        window.location.replace("http://127.0.0.1:5500/pages/flightList.html");
};

//clear error borders if any  before validating data
const clearErrorBorders = () => {
    passengerCount.style.border = "1px solid #049edb";
    depDate.style.border = "1px solid #049edb";
    sourceLoc.style.border = "1px solid #049edb";
    destinationLoc.style.border = "1px solid #049edb";
    returnDate.style.border = "1px solid #049edb";
    document.getElementById("errorMsg").style.display = "none";
};

//validate whether required data is entered
const validateForm = () => {
    let isFormValid = true, emptyFieldCount = 0;
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    if( tripType == "roundtrip" ){
        if(passengerCount.value == ""){
            emptyFieldCount++;
            passengerCount.style.border = "2px solid red";
        }
        if(depDate.value == ""){
            emptyFieldCount++;
            depDate.style.border = "2px solid red";
        }
        if(sourceLoc.value == ""){
            emptyFieldCount++;
            sourceLoc.style.border = "2px solid red";
        }
        if(destinationLoc.value == ""){
            emptyFieldCount++;
            destinationLoc.style.border = "2px solid red";
        }  
        if(returnDate.value == ""){
            emptyFieldCount++;
            returnDate.style.border = "2px solid red";
        }
        if(emptyFieldCount > 0){
            isFormValid = false;
            document.getElementById("errorMsg").style.display = "block";
        }    
    } else {
        if(passengerCount.value == ""){
            emptyFieldCount++;
            passengerCount.style.border = "2px solid red";
        }
        if(depDate.value == ""){
            emptyFieldCount++;
            depDate.style.border = "2px solid red";
        }
        if(sourceLoc.value == ""){
            emptyFieldCount++;
            sourceLoc.style.border = "2px solid red";
        }
        if(emptyFieldCount > 0){
            isFormValid = false;
            document.getElementById("errorMsg").style.display = "block";
        } 
    } 
    return isFormValid;
};
