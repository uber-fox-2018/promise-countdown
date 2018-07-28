const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
  .then(time => {
    console.log(time)
  })
  .catch(err => {
    console.log(err)
  })
};

main();
