let timeInSeconds = 10;

let minutes = getMinutes(timeInSeconds);
let seconds = getSeconds(timeInSeconds);

// Call set timerFormat for initial time
formatTime(minutes, seconds);

// Get access to button
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startTimer);

// Only call this when the start button is clicked
let setIntervalReturn;
//let setIntervalReturn = setInterval(decrement, 1000);

function startTimer(e) {
    e.preventDefault();
    if(startButton.textContent === "Start")
    {
        startButton.style.background = "Red";
        startButton.textContent = "Stop";
        setIntervalReturn = setInterval(decrement, 1000);
    } else if(startButton.textContent === "Stop")
    {
        // "Pause" the timer
        clearInterval(setIntervalReturn);
        startButton.style.background = "lightgreen";
        startButton.textContent = "Start";
    } else 
    {
        // Restart
        timeInSeconds = 5;
        minutes = getMinutes(timeInSeconds);
        seconds = getSeconds(timeInSeconds);
        formatTime(minutes, seconds);
        startButton.style.background = "Red";
        startButton.textContent = "Stop";
        setIntervalReturn = setInterval(decrement, 1000);
    }   
}

function decrement() {
    timeInSeconds -= 1;

    minutes = getMinutes(timeInSeconds);
    seconds = getSeconds(timeInSeconds);
    formatTime(minutes, seconds);

    if(timeInSeconds === 0)
    {
        //alert("Times up!");
        startButton.style.background = "yellow";
        startButton.textContent = "Restart";
        clearInterval(setIntervalReturn);
    }
}

function getMinutes(timerTime) {
    return Math.floor(timerTime / 60);
}

function getSeconds(timerTime) {
    return timerTime % 60;
}

function formatTime(minutes, seconds) {
    let timeLeft = document.getElementById("timer");

    if(minutes >= 10 && seconds >= 10)
    {
        timeLeft.textContent = minutes + ":" + seconds;
    } else if(minutes < 10 && seconds >= 10) 
    {
        timeLeft.textContent = "0" + minutes + ":" + seconds;
    } else if(minutes >= 10 && seconds < 10) 
    {
        timeLeft.textContent = minutes + ":0" + seconds;
    } else 
    {
        timeLeft.textContent = "0" + minutes + ":0" + seconds;
    }
}