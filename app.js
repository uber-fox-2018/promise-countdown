const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
  .then((success) => {
    displayCountdown(success);
  })
  .catch((err) => {
    displayCountdown(err)
  })
};

main();
