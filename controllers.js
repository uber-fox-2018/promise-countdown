const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let countdown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
     
      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {
        displayCountdown(secondsLeft);
      }

      let minute = Math.trunc(seconds/60)
      let sec = seconds%60
      
      if (seconds === 0) {
        clearInterval(countdown)
      }

      if (sec < 10) {
        sec = '0' + sec 
      } 

      if (minute < 10) {
        minute = '0' + minute
      }
      
      displayCountdown(`${minute} : ${sec}`)
      seconds--
    }, 100);
  });

module.exports = {
  timer
};
