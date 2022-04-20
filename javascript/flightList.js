//handle go back
const goBackToSearchFlights = () => {
    localStorage.clear();
    window.location.replace("../pages/bookFlight.html");
};
//handle view flight redirection and set localstorage with selected flight data
const viewFlight = (flightData) => {
    localStorage.setItem("flightData",JSON.stringify(flightData));
    window.location.replace("../pages/flightDetail.html");
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
        rate: 100,
        terminal: 3,
        flightNum: "I5 | 740"
    },
    {
        id: 2,
        name: "Indigo",
        source: "COK",
        destination: "CHE",
        arrival: "10:30",
        departure: "11:05",
        duration: "35m",
        rate: 200,
        terminal: 4,
        flightNum: "I4 | 740"
    },
    {
        id: 3,
        name: "Vistara",
        source: "COK",
        destination: "CHE",
        arrival: "22:40",
        departure: "23:25",
        duration: "45m",
        rate: 300,
        terminal: 5,
        flightNum: "V2 | 330"
    },
    {
        id: 3,
        name: "Vistara",
        source: "COK",
        destination: "CHE",
        arrival: "12:25",
        departure: "1:05",
        duration: "40m",
        rate: 400,
        terminal: 3,
        flightNum: "V1 | 231"
    },
    {
        id: 4,
        name: "Jet Airways",
        source: "BLR",
        destination: "HYD",
        arrival: "02:35",
        departure: "03:35",
        duration: "1h",
        rate: 500,
        terminal: 6,
        flightNum: "J6 | 989"
    },
    {
        id: 5,
        name: "Spicejet",
        source: "BLR",
        destination: "HYD",
        arrival: "18:20",
        departure: "19:20",
        duration: "1h",
        rate: 600,
        terminal: 2,
        flightNum: "S8 | 223"
    },
    {
        id: 6,
        name: "Go Air",
        source: "MUM",
        destination: "DEL",
        arrival: "11:55",
        departure: "14:55",
        duration: "3h",
        rate: 700,
        terminal: 2,
        flightNum: "G6 | 707"
    }
];