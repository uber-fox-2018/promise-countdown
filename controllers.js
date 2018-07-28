const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(secondsLeft);
        resolve();
      } else {

        seconds -= 1;
        let hour = Math.floor(seconds / 3600);
        let minute = Math.floor((seconds % 3600) / 60);
        let second = Math.floor(seconds - hour * 3600 - minute * 60);
        let time = `${hour} : ${minute} : ${second}`;
        displayCountdown(time);

      }

    }, 1000);
  });

module.exports = {
  timer
};
