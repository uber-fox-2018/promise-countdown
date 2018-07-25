const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds)
    .then(() => {
      console.log(`Times up!`);
    })
    .catch((err) => {
      console.log(err);
    });

  // Your code here...
};

main();
