
const sourceLoc = document.getElementById("from");
const destinationLoc = document.getElementById("to");
const depDate = document.getElementById("depDate");
const returnDate = document.getElementById("returnDate");
const passengerCount = document.getElementById("passengerCount");

//airport code key value pairs to refer while setting source and destination in localstorage
const airportCodes = {
    "Kochi": 'COK',
    "Bengaluru": "BLR",
    "Mumbai": "MUM",
    "Hyderabad": "HYD",
    "Chennai": "CHE",
    "Delhi": "DEL"
};

//handle go back
const goBackToLanding = () => {
    window.location.replace("../pages/bookTravel.html");
};

//handle disable of dates in to date based on departure date selection
const handleToDate = () => {
    $('#returnDate').attr('min', $('#depDate').val());
}

//validate the data before moving to next page
const searchFlights = (e) => {
    e.stopPropagation();
    e.preventDefault();
    clearErrorBorders();
    const isFormValid = validateForm();
    if(isFormValid){
        //get user's selection and set in localstorage to filter flight list accordingly
        source = $('[name="fromLinks"]').val();
        destination = $('[name="toLinks"]').val();
        fare = $('#book').val();

        localStorage.setItem("sourceLoc",airportCodes[source]);
        localStorage.setItem("destinationLoc",airportCodes[destination]);
        localStorage.setItem("fare",fare);

        //get fromdate and todate and convert to required date format
        const fromDate = new Date($('#depDate').val());
        day = fromDate.getDate();
        dayOfWeek = fromDate.getDay();
        month = fromDate.getMonth() + 1;
        year = fromDate.getFullYear();

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // localStorage.setItem("fromDate",[day, month, year].join('/'));
        localStorage.setItem("fromDateDay", weekdays[dayOfWeek]);
        localStorage.setItem("fromDate", [day, month, year].join('/'));

        //get fromdate and todate and convert to required date format
        let toDate = new Date($('#returnDate').val());
        day = toDate.getDate();
        dayOfWeek = toDate.getDay();
        month = toDate.getMonth() + 1;
        year = toDate.getFullYear();

        localStorage.setItem("toDateDay", weekdays[dayOfWeek]);
        localStorage.setItem("toDate", [day, month, year].join('/'));

        window.location.replace("../pages/flightList.html");
    }
       
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

