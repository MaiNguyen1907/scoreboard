let hscore = document.getElementById("homescore")
let gscore = document.getElementById("guestscore")
let gcore = 0
let hcore=0

function incrementhome1() {
    hcore = hcore + 1
    hscore.innerText = hcore
}
function incrementhome2() {
    hcore = hcore + 2
    hscore.innerText = hcore
}
function incrementhome3() {
    hcore = hcore + 3
    hscore.innerText = hcore
}

function incrementguest1() {
    gcore = gcore + 1
    gscore.innerText = gcore
}
function incrementguest2() {
    gcore = gcore + 2
    gscore.innerText = gcore
}
function incrementguest3() {
    gcore = gcore + 3
    gscore.innerText = gcore
}


let timerInterval; // Variable to hold the timer interval
let isTimerRunning = false; // State to track if the timer is running
let timeRemaining = 12 * 60; // Default timer value in seconds (12 minutes)

// Timer functions
function start() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
    } else {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                alert("Time's up!");
            } else {
                timeRemaining--;
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function reset() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timeRemaining = 12 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    document.getElementById("timerscore").textContent = `${minutes}:${seconds}`;
}

// Quarter functions
let currentQuarter = 0;

function incrementqtr() {
    currentQuarter = (currentQuarter + 1) % 5; // Increment and reset after 4
    document.getElementById("qtrscore").textContent = currentQuarter;
    // Reset timer when quarter increments
    reset();
}

// Logo functions
document.getElementById("team1").addEventListener("input", function () {
    const url = this.value;
    document.getElementById("home-logo").src = url || "pngwing.com.png"; // Default if input is empty
});

document.getElementById("team2").addEventListener("input", function () {
    const url = this.value;
    document.getElementById("guest-logo").src = url || "pngwing.com.png"; // Default if input is empty
});

// Reset All function
function resetall() {

    reset(); // Reset timer
    currentQuarter = 0;
    document.getElementById("qtrscore").textContent = currentQuarter;
    document.getElementById("qtrscorebg").textContent = currentQuarter;
    hscore.innerText = 0;
    gscore.innerText = 0;
    updateScore("homescore", homeScore);
    updateScore("guestscore", guestScore);
    // Clear input fields
    document.getElementById("team1").value = "";
    document.getElementById("team2").value = "";
    console.log("Inputs cleared and reset all executed.");
}