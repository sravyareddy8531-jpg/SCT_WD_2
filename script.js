let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  let lapTime = document.getElementById("display").innerText;
  let li = document.createElement("li");
  li.innerText = lapTime;
  document.getElementById("laps").appendChild(li);
}
