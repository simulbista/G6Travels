//handle go back
const goBackToSearchFlights = () => {
    window.location.replace("http://127.0.0.1:5500/pages/bookFlight.html");
};
//handle view flight redirection
const viewFlight = () => {
    window.location.replace("http://127.0.0.1:5500/pages/flightDetail.html");
};
const flightData = [
    {
        id: 1,
        name: "Indigo",
        source: "COK",
        destination: "CHE",
        arrival: "04:15",
        departure: "07:10",
        duration: "2h 55m",
        rate: 100
    },
    {
        id: 2,
        name: "Indigo",
        source: "COK",
        destination: "CHE",
        arrival: "10:30",
        departure: "11:05",
        duration: "35m",
        rate: 200
    },
    {
        id: 3,
        name: "Vistara",
        source: "COK",
        destination: "CHE",
        arrival: "22:40",
        departure: "23:25",
        duration: "45m",
        rate: 300
    },
    {
        id: 3,
        name: "Vistara",
        source: "COK",
        destination: "CHE",
        arrival: "12:25",
        departure: "1:05",
        duration: "40m",
        rate: 400
    },
    {
        id: 4,
        name: "Jet Airways",
        source: "BLR",
        destination: "HYD",
        arrival: "02:35",
        departure: "03:35",
        duration: "1h",
        rate: 500
    },
    {
        id: 5,
        name: "Spicejet",
        source: "BLR",
        destination: "HYD",
        arrival: "18:20",
        departure: "19:20",
        duration: "1h",
        rate: 600
    },
    {
        id: 6,
        name: "Go Air",
        source: "MUM",
        destination: "DEL",
        arrival: "11:55",
        departure: "14:55",
        duration: "3h",
        rate: 700
    }
];