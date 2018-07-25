const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.green(figlet.textSync(convertTime(seconds))));
  if(seconds === 0) {
    console.log(chalk.red(figlet.textSync("Time's Up!")))
  }
  
};

function convertTime(seconds) {
  let menit = Math.floor(seconds / 60);
  let detik = Math.floor(seconds % 60);

  if (menit < 10) {
    var mins = '0' + menit;
  } else {
    mins = menit;
  }

  if (detik < 10) {
    var second = '0' + detik;
  } else {
    second = detik;
  }
  return `${mins} : ${second}`;
}

module.exports = { displayCountdown };
