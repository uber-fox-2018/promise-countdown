const { displayCountdown } = require("./views");

const timer = seconds =>{
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(converter(seconds - 1));
    let count = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(count);
        resolve();
      } else {
        displayCountdown(converter(secondsLeft));
      }
    }, 1000);
  });
}

const converter = input => {
  let minutes = Math.floor(input / 60)
  let seconds = input % 60; 
  if (minutes >= 10){
    if (seconds >= 10){
      return `${minutes} : ${seconds}`;
    } else {
      return `${minutes} : 0${seconds}`;
    }
  } else {
    if (seconds >= 10){
      return `0${minutes} : ${seconds}`;
    } else {
      return `0${minutes} : 0${seconds}`;
    }
  }
}

module.exports = {
  timer
};
