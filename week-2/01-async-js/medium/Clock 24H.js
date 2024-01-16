const d = new Date();

// let hours = 12;
// let minutes = 59;
// let seconds = 58;

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();


function padWithZero(num) {
   return ("0" + num).slice(-2);
}

setInterval(() => {
   console.clear();
   console.log(`${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}`);
   if (seconds == 60) {
      seconds = 0;
      minutes++;
   }
   if (minutes == 60) {
      minutes = 0;
      hours++;
   }
   if (hours > 24) {
      hours = 1;
   }
   seconds++;
}, 1000);

