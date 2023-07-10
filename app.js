let timerdisplay = document.querySelector('.timerdisplay');
const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

let msec = 0;
let secs = 0;
let mins = 0;

let timeId = null;

// start button
startBtn.addEventListener('click', () => {
    if(timeId !== null) {
        clearInterval(timeId);
    }
    timeId = setInterval(startTimer, 10);

});

// Stop Button
stopBtn.addEventListener('click', () => {
    clearInterval(timeId)
})

// Reset Button
resetBtn.addEventListener('click', () => {
    clearInterval(timeId);
    timerdisplay.innerHTML = `00 : 00 : 00`
    mins = msec = secs = 0;
})

// Function To start Timer
const startTimer = () => {
    msec++
    if(msec == 100) {
        msec = 0;
        secs++
        if(secs == 60) {
            secs = 0;
            mins++
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
