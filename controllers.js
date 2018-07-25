const { displayCountdown } = require("./views");

const timer = seconds => {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft <= 0) {
        clearInterval();
        resolve(`KELAR`);
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });
}

function display(str) {
  displayCountdown(str)
}

module.exports = {
  timer:timer,
  display:display
};
