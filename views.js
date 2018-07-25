const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  // setTimeout(function(){}, 1000);
  console.log(chalk.cyan(figlet.textSync(seconds)));
  // if(seconds === 0){  
  //   console.log(chalk.cyan(figlet.textSync("Countdown App")));
  //   console.log(chalk.cyan(figlet.textSync(seconds)));
  //   console.log(chalk.cyan(figlet.textSync('TIME OUT')));
  // }
  
};

module.exports = { displayCountdown };
