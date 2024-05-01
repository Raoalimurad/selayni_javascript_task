let timer = 5;
let sec = 40;
let initialTimer = 5; // Store initial timer value
let initialSec = 40; // Store initial seconds value
let timers = document.getElementById("timer");
let timerInterval; // To store the setInterval reference
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let displaytimer = document.getElementById("displaytimer")


function myfun() {
    sec--; // Decrement the seconds

    if (sec == 0) {
        sec = 60; // Reset seconds
        timer--; // Decrement timer
    }
    timers.innerHTML = `<h1>${timer}m:${sec}s</h1>`;

    if (timer == 0 && sec == 0) {
        clearInterval(timerInterval); // Stop the timer
        console.log("Timer expired!");
    }
}

function startTimer() {
    myfun(); // Call myfun immediately
    timerInterval = setInterval(myfun, 1000); // Call myfun every second
    startButton.style.display = "none"; // Hide the start button
    stopButton.style.display = "inline-block"; // Show the stop button
}

function stopTimer() {
    clearInterval(timerInterval); // Stop the timer
    startButton.style.display = "inline-block"; // Show the start button
    stopButton.style.display = "none"; // Hide the stop button
}

function resetTimer() {
    clearInterval(timerInterval); // Stop the timer
    timer = initialTimer; // Reset timer to initial value
    sec = initialSec; // Reset seconds to initial value
    timers.innerHTML = `<h2>${timer}m:${sec}s</h2>`; // Update display
    startButton.style.display = "inline-block"; // Show the start button
    stopButton.style.display = "none"; // Hide the stop button
}



let miliSec = 0;
let countSec = 0;
let countMin = 0;
let countHour = 0 
let startCountTimer = false
let stopWatchInterval;
let start = document.getElementById("start");
let stop = document.getElementById("stop");
stop.style.display = "none"
let displaycounter = document.getElementById("displaycounter")
displaycounter.style.display = "none"

function startCount(){
   startCountTimer = true
   stopWatch()
   stopWatchInterval = setInterval(stopWatch,100)
   stop.style.display = "inline-block";
   start.style.display = "none"
}
function stopWatch(){
let stopWatchTimer = document.getElementById("stopWatchTimer")
    if(startCountTimer){
        miliSec = miliSec+1
    }
    if(miliSec == 100){
        countSec = countSec + 1;
        miliSec = 0
    }
    if(countSec == 60){
        countMin = countMin + 1;
        countSec = 0
    }
    if(countMin == 60){
        countHour = countHour+1;
        countMin = 0
    }
     let getSec = countSec;
     let getMin = countMin;
     let getHour = countHour;
     let getMiliSec = miliSec

     if(miliSec < 10){
        getMiliSec = "0"+miliSec
     }
     if(miliSec < 10){
        getSec = "0"+countSec
     }
     if(countSec < 10){
        getSec = "0"+countSec
     }
     if(countMin < 10){
        getMin = "0"+countMin
     }
     if(countHour < 10){
        getHour = "0"+countHour
     }
  

    stopWatchTimer.innerHTML = `<h2> ${getHour} :  ${getMin} :  ${getSec}: ${getMiliSec} </h2>`
    
}
function stopCount(){
    clearInterval(stopWatchInterval)
    stop.style.display = "none";
    start.style.display = "inline-block"
}

function resetCount(){
    location.reload()
}
function showcount(){
    displaycounter.style.display='inline-block'
    displaytimer.style.display="none"
}
function showTimer(){
    displaycounter.style.display='none'
    displaytimer.style.display="inline-block"
}