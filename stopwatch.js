var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
var milisec = document.querySelector(".milisec");
var minute = 0;
var second = 0;
var milisecond = 0;
//starting stopwatch
document.querySelector(".start-btn").addEventListener("click", () => {
    id = setInterval(starttimer, 15);
});
function starttimer() {
    milisecond++;
    if (milisecond < 10) {
        milisec.textContent = "0" + milisecond;
    } else {
        milisec.textContent = milisecond;
    }
    if (milisecond >= 60) {
        milisecond = 0;
        milisec.textContent = milisecond;
        second++;
        if (second < 10) {
            sec.textContent = "0" + second;
        } else {
            sec.textContent = second;
        }
    } else if (second >= 60) {
        second = 0;
        sec.textContent = second;
        minute++;
        if (minute < 10) {
            min.textContent = "0" + minute;
        } else {
            min.textContent = minute;
        }
    }
}
//stopping watch
document.querySelector(".stop-btn").addEventListener("click", () => {
    clearInterval(id);
});
//resetting watch
document.querySelector(".reset-btn").addEventListener("click", () => {
    clearInterval(id);
    minute = 0;
    second = 0;
    milisecond = 0;
    min.textContent = "00";
    sec.textContent = "00";
    milisec.textContent = "00";
});