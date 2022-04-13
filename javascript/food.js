// js for a countdown timer
console.log("Javascript timer countdown initiated");
const startMin = 5;
let time = startMin * 60;
const countDown = document.getElementById('count-down');

// calling updateCountdown every sec
// setInterval(updateCountdown, 1000);
let i = setInterval(function updateCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    // at 10:00 it shows single training 0 hence we add this line to fix the issue
    sec = sec < 10 ? '0' + sec : sec;

    countDown.innerHTML = `${min}:${sec}`;
    time--;

    //to stop the function execution after the timer reaches 0 mins and 0 seconds
    if (min == 0 && sec == 0) {
        clearInterval(i);
    }
}, 1000);