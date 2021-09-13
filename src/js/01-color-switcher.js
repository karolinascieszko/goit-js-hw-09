import { qs, qsa } from './utils';

const startBtn = qs('button[data-start]');
const stopBtn = qs('button[data-stop]');
const body = qs('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disabled = true;

const startChangeColor = () => {
  timerId = setInterval(() => {
    const backgroundColor = getRandomHexColor();
    body.style.backgroundColor = backgroundColor;
    console.log(backgroundColor);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
};

const stopChangeColor = () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
