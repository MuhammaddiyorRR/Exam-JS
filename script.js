const pomodorobtns = document.querySelector(".pomodoro-btns");
const shortBtn = document.querySelector(".short-btn");
const longBtn = document.querySelector(".long-btn");
const pBtn = document.querySelector(".p-btn");
const timer = document.querySelector(".timer");
const time = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

const btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
});

pauseBtn.addEventListener("click", () => {
  startBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});

stopBtn.addEventListener("click", () => {
  clearInterval(starter);

  minute = 25;
  secund = 0;
  if (secund === 0) secund = "0" + 0;
  time.innerHTML = `${minute} : ${secund}`;
  for (let i = 0; i < btns.length; i++) {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    btns[0].classList.add("active");

    startBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
  }
});

function myFunction() {
  if (startBtn.innerText === "Start") {
    startBtn.classList.remove("start");
    startBtn.classList.add("pause");
    startBtn.innerText = "pause";
  } else {
    startBtn.classList.remove("pause");
    startBtn.classList.add("start");
    startBtn.innerText = "Start";
  }
}

startBtn.addEventListener("click", () => {
  runTimer();
});

pauseBtn.addEventListener("click", () => {
  clearInterval(starter);
});

pBtn.addEventListener("click", () => {
  clearInterval(starter);

  minute = 25;
  secund = 0;
  if (secund === 0) secund = "0" + 0;
  time.innerHTML = `${minute} : ${secund}`;
  startBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});

shortBtn.addEventListener("click", () => {
  clearInterval(starter);

  minute = 5;
  secund = 0;
  if (secund === 0) secund = "0" + 0;
  time.innerHTML = `${minute} : ${secund}`;
  startBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});

longBtn.addEventListener("click", () => {
  clearInterval(starter);

  minute = 15;
  secund = 0;
  if (secund === 0) secund = "0" + 0;
  time.innerHTML = `${minute} : ${secund}`;
  startBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});

let minute = 25;
let secund = 0;
if (secund === 0) secund = "0" + 0;
time.innerHTML = `${minute} : ${secund}`;

function runTimer() {
  time.innerHTML = `${minute} : ${secund}`;
  starter = setInterval(render, 1000);
}

function render() {
  secund--;
  if (secund == -1) {
    minute--;
    secund = 59;
  }

  if (minute == -1) {
    clearInterval(starter);
    time.innerHTML = "";
  } else {
    time.innerHTML = ` ${minute} : ${secund}`;
  }
}
