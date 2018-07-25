const { displayCountdown } = require("./views");

const timer = seconds =>{
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayCountdown(seconds - 1);
    var id = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {     
        clearInterval(id);
        resolve('finish');
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });
}


module.exports = {
  timer
};

