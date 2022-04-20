//handle go back
const goBackToFlightList = () => {
    window.location.replace("../pages/flightList.html");
};

//airport code key value pairs to refer while setting fields in from and to
const airportCodes = {
    'COK': "Kochi",
    "BLR": "Bengaluru",
    "MUM": "Mumbai",
    "HYD": "Hyderabad",
    "CHE": "Chennai",
    "DEL": "Delhi"
};

//Function to handle tab click and show corresponding tab's content
const handleFlightDetailTabClick = (tabIndex) => {
    hideAllTabs();
    $('.tablinks:nth-child('+tabIndex+')').addClass('active');
    switch(tabIndex){
        case 1:
            document.getElementById('flightDetails').style.display = "contents";
            break;
        case 2:
            document.getElementById('fareSummary').style.display = "block";
            break;
        case 3:
            document.getElementById('flightCancellation').style.display = "block";
            break;
        case 4:
            document.getElementById('dateChange').style.display = "block";
            break;
        default: break;
    }
};

//Function to hide all tab contents and remove active tab class from all tabs initially
const hideAllTabs = () => {
    $('.tablinks').removeClass('active');
    document.getElementById('flightDetails').style.display = "none";
    document.getElementById('fareSummary').style.display = "none";
    document.getElementById('flightCancellation').style.display = "none";
    document.getElementById('dateChange').style.display = "none";
};