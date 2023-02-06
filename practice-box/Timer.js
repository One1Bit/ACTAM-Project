const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 5;
const ALERT_THRESHOLD = 3;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};
let remainingPathColor = COLOR_CODES.info.color;

export const TIME_LIMIT=5;
let timePassed = 0;
export let timeLeft = TIME_LIMIT;
let timerInterval = null;

export function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
export function drawTimer()
{
    timeLeft=TIME_LIMIT;
    document.getElementById("app").innerHTML = `
<div id="timer" class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
         <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
<span id="base-timer-label" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;
}

export function startTimer() {

    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft=TIME_LIMIT;
    document.getElementById("app").style.display = 'block';
    timerInterval = setInterval(() => {
        if (timeLeft<0)
        {
            clearInterval(timerInterval);
            document.getElementById("app").style.display = 'none';

        }
        timePassed = timePassed + 1;
        //if (rightClick===false){
        //    setRightClick(true);
        //    clearInterval(timerInterval);
        //}
        //else{
            timeLeft = TIME_LIMIT - timePassed;
        //}

        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft+1
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

    }, 1000);

}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

export function createTextWrong(key) {
    timeLeft=0;
    document.getElementById("app2").innerHTML = `
<div class="text">
    <p>
        <span style='color: #d91a1a;'>Wrong!</span>
        <span>It was:</span>
        <span style='color:orangered;'> ${key}</span>
    </p>
</div>
`;
}
export function createTextRight(key) {
    timeLeft=0;
    document.getElementById("app2").innerHTML = `
<div class="text">
    <p>
        <span style='color: #20c720;'>Right!</span>
        <span>It was: </span>
        <span style='color:orangered;'> ${key}</span>
    </p>
</div>
`;
}
export function deleteElements() {
    document.getElementById("app2").innerHTML = '';
}
