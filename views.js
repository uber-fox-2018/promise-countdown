const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  const convertTime = seconds => {
    let minutes = Math.floor(seconds / 60)
    let second = Math.floor(seconds % 60)
  
    if (minutes < 10) {
      var menit = "0" + minutes
    } else {
      menit = minutes 
    }
  
    if (second < 10) {
      var detik = "0" + second
    } else {
      detik = second
    }
  
    return `${menit} : ${detik}`
  
  }
  console.log(chalk.blue(figlet.textSync(convertTime(seconds))))
};

module.exports = { displayCountdown };
