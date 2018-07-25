const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let countdown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      let menit = Math.floor(seconds/60)
      let detik = seconds%60

      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {
        displayCountdown(secondsLeft);
      }

      if (seconds === 0) {
        clearInterval(countdown)
      }
  
      if (detik < 10) {
        detik = `0`+ detik
      }
      
      if (menit < 10) {
        menit = `0` + menit
      }
  
      displayCountdown(`${menit}: ${detik}`)
      seconds--
    }, 100);
  });

module.exports = {
  timer
};
