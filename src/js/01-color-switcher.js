import '../css/common.css';

const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;

const randomBodyColorGenerator = {
  DELAY: 1000,
  intervalID: null,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  start() {
    startBtn.addEventListener('click', () => {
      this.intervalID = setInterval(() => {
        body.style.backgroundColor = this.getRandomHexColor();
      }, this.DELAY);
      startBtn.disabled = true;
      stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(this.intervalID);
      stopBtn.disabled = true;
      startBtn.disabled = false;
    });
  },
};

randomBodyColorGenerator.start();


