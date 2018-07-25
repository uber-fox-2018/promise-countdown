const controllers = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  controllers.timer(seconds).then(str => {
    controllers.display(str)
    
  })
  
};

main();
