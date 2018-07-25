const { displayCountdown } = require("./views");
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    let detik = seconds
    var menit = parseInt(seconds/60,10)
    var waktu = parseInt(seconds%60,10)
    // console.log(seconds);
    setTimeout(function(){}, 1000);
    for(let i = 0 ; i <= seconds ; i++){
      sleep()
      if(waktu === 0){
        menit-=1
        waktu = 60
      }else if(waktu < 10 && menit < 10){
        displayCountdown(`0${menit}:0${waktu}`);
      }else if(waktu < 10 && menit > 10){
        displayCountdown(`${menit}:0${waktu}`);
      }else if(waktu > 10 && menit < 10){
        displayCountdown(`0${menit}:${waktu}`);
      }else{
        displayCountdown(`${menit}:${waktu}`);
        // console.log(menit,waktu);
      }
      if(i === seconds){
        displayCountdown(`00:00`);
      }
      
      waktu--
    }
    
    // setInterval(() => {
    //   const secondsLeft = Math.floor((then - Date.now()) / 1000);
    //   if (secondsLeft < 0) {
    //     clearInterval();
    //     resolve();
    //   } else {
    //     displayCountdown(secondsLeft);
    //   }
    // }, 1000);
  });

module.exports = {
  timer
};
