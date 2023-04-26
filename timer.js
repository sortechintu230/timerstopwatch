var minute = document.getElementById("min");
var second = document.getElementById("sec");
var mintext = document.querySelector(".min");
var sectext = document.querySelector(".sec");
var idmin;
var idsec;
var setBtn = document.getElementById("setbtn");
const alarm = new Audio('resources/alarm.mp3');
//setting the timer on users value
setBtn.addEventListener('click', () => {
    mintext.textContent = minute.value;
    sectext.textContent = second.value;
    if (minute.value == 0) {
        mintext.textContent = "00";
    }
    if (second.value == 0) {
        sectext.textContent = "00";
    }
    if(minute.value<10){
        mintext.textContent = "0"+minute.value;
    }
    if(second.value<10){
        sectext.textContent = "0"+second.value;
    }
});
//starting the timer
document.querySelector(".start-btn").addEventListener("click", () => {
    var minutes = minute.value;
    var seconds = second.value;
    if (minutes != 0 || seconds != 0) {
        idsec = setInterval(() => {
            seconds--;
            if (seconds < 10) {

                sectext.textContent = "0" + seconds;
            } else {
                sectext.textContent = seconds;
            }
            if (seconds <= 0) {
                if (minutes != 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 10) {
                        mintext.textContent = "0" + minutes;

                    } else {

                        mintext.textContent = minutes;
                    }
                    sectext.textContent = seconds;
                    seconds--;
                } else {
                    alarm.play();
                    clearInterval(idsec);
                    mintext.textContent = "00";
                    sectext.textContent = "00";
                    alert("Timer Done!");
                }

            }
        }, 1000);
    } else {
        alert("Please set the timer!");
    }
});
//stoping the timer
document.querySelector(".stop-btn").addEventListener("click", () => {
    clearInterval(idsec);
});
//resetting timer
document.querySelector(".reset-btn").addEventListener("click", () => {
    clearInterval(idsec);
    mintext.textContent = "00";
    sectext.textContent = "00";
});

