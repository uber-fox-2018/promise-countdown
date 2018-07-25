const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    var interval = setInterval(function(){
      var menit = Math.floor(seconds/60)
      var detik = seconds%60
  
      var viewMenit = ''
      var viewDetik = ''
      
      if(menit>=10){
        viewMenit += menit
      }else{viewMenit = `0${menit}`}
      if(detik>=10){
        viewDetik += detik
      }else{viewDetik = `0${detik}`}
  
      resolve( displayCountdown(`${viewMenit}:${viewDetik}`))

      seconds -= 1
  
      if(seconds<0){
        clearInterval(interval)
        reject()
      }
    },1000)
  });

module.exports = {
  timer
};
