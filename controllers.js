const { displayCountdown } = require("./views");

const timer = seconds => {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    var countDown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(countDown);
        resolve("Done!");
      } else if(secondsLeft>=0){
        displayCountdown(secondsLeft);
      }else{
        reject("Error")
      }
    }, 1000);
  });
}
  
module.exports = {
  timer: timer
};


