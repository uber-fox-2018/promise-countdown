const { displayCountdown } = require("./views");

function timer(seconds) {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    let count = setInterval(() => {
      displayCountdown(seconds - 1);
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      // console.log(secondsLeft);
      if (secondsLeft < 0) {
        clearInterval(count)
        reject();
      } else {
        var mins;
        var sec;
        if (seconds >= 60) {
          mins = Math.floor(seconds / 60);
          sec = seconds % 60;
          if (mins < 10) {
            mins = '0' + mins;
          }
        } else {
          sec = seconds;
          mins = '00';
        }
        if (sec < 10) {
          sec = '0' + sec;
        }
        let countDown = `${mins} : ${sec}`;
        resolve(countDown)
      }
      seconds--
    }, 1000);
  });
}

module.exports = {
  timer
};