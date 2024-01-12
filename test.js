// 1. Create a counter in Javascript (counts down from 30 to 0)
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

// let i = 5;

// function counterdisplay() {
//    if (i >= 1) {
//       const startTime = new Date().getTime();
//       console.log(`Count Down - Left ${i}`);
//       i--;
//       setTimeout(function () {
//            const endTime = new Date().getTime();
//            console.log("Time taken between innerFunction and setTimeout call is", endTime - startTime);
//          counterdisplay();
//       }, 1000);
//    }
// }

// counterdisplay();

// Terminal Clock

function displayTimer() {
   const hours = new Date().getHours();
   const minutes = new Date().getMinutes();
   const seconds = new Date().getSeconds();
   console.clear();
   console.log(`HH: ${hours} MM: ${minutes} SS:${seconds}`);
}

setInterval(displayTimer, 1000);
