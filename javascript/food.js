// js for a countdown timer
console.log("Javascript timer countdown initiated");
const startMin = 5;
let time = startMin * 60;
const countDown = document.getElementById('count-down');
let counter = 0;

// calling updateCountdown every sec
// setInterval(updateCountdown, 1000);
let i = setInterval(function updateCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    // at 10:00 it shows single training 0 hence we add this line to fix the issue
    sec = sec < 10 ? '0' + sec : sec;

    countDown.innerHTML = `${min}:${sec}`;
    time--;

    // counter to stop the function execution after the timer reaches 0 mins and 0 seconds
    counter++;
    if (counter == 301) {
        clearInterval(i);
    }
}, 1000);