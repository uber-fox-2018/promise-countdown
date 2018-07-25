const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var minutes = Math.floor(seconds/60)
  var detik = Math.round(((seconds/60) - Math.floor(seconds/60)) * 60)
  console.log(chalk.cyan(figlet.textSync(`${minutes}:${detik}`)))

};

module.exports = { displayCountdown };
