const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  
  let minute = parseInt(seconds / 60, 10)
  let second = parseInt(seconds % 60, 10);
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  console.log(chalk.magenta(figlet.textSync(minute + ":" + second)));
  if (seconds === 0) {
    console.log(chalk.yellow(figlet.textSync("Happy Coding")));
  }
};

module.exports = { displayCountdown };
