const d = new Date();

//  For testing setting vvaribles
// let hours = 11;
// let minutes = 59;
// let seconds = 58;

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let ampm = "";

if (hours >= 12) {
   ampm = "PM";
} else {
   ampm = "AM";
}

if (hours > 12) {
   hours -= 12;
}

function padWithZero(num) {
   return ("0" + num).slice(-2);
}


setInterval(() => {
   console.clear();
   console.log(`${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}:${ampm}`);
   if (seconds == 60) {
      seconds = 0;
      minutes++;
   }
   if (minutes == 60) {
      minutes = 0;
      hours++;
   }
   if (hours > 12) {
      hours = 1;
   }
   if ((hours) => 12) {
      ampm = "PM";
   }
   seconds++;
}, 1000);
