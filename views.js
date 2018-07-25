const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  //clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.magenta(figlet.textSync(formatSeconds(seconds))));
};

const formatSeconds = totalSeconds => {
  let hours, minutes, seconds;
  hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  totalSeconds %= 3600;
  minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return [hours, minutes, seconds].join(':');
}

module.exports = { displayCountdown };
