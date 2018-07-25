const { timer } = require("./controllers");
// const { displayCountdown } = require('./views')

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
  .then(count => {
    // displayCountdown(count)
    console.log('');
    
  })
  .catch(() => {
    console.log('stop');
    
    // displayCountdown()
  })
};

main();
