const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(convert(seconds))));
};

function convert(seconds) {
  var menit = Math.floor(seconds/60)
  var second = seconds%60  
  var showmenit = menit < 10 ? `0${menit}` : `${menit}`
  var showSecond = second < 10 ? `0${second}` : `${second}`

  return `${showmenit}:${showSecond}`
}

module.exports = { displayCountdown };

function display (seconds){

}
