// // 1. Create a counter in Javascript (counts down from 30 to 0)
// // 2. Calculate the time it takes between a setTimeout call and the inner function actually running

// // let i = 5;

// // function counterdisplay() {
// //    if (i >= 1) {
// //       const startTime = new Date().getTime();
// //       console.log(`Count Down - Left ${i}`);
// //       i--;
// //       setTimeout(function () {
// //            const endTime = new Date().getTime();
// //            console.log("Time taken between innerFunction and setTimeout call is", endTime - startTime);
// //          counterdisplay();
// //       }, 1000);
// //    }
// // }

// // counterdisplay();

// // Terminal Clock

// // function displayTimer() {
// //    const hours = new Date().getHours();
// //    const minutes = new Date().getMinutes();
// //    const seconds = new Date().getSeconds();
// //    console.clear();
// //    console.log(`HH: ${hours} MM: ${minutes} SS:${seconds}`);
// // }

// // setInterval(displayTimer, 1000);

// class trekking {
//    constructor(region, grade, name) {
//       this.region = region;
//       this.grade = grade;
//       this.name = name;
//    }
//    static greetTrekker(name) {
//       console.log(`Welcome ${name} to mountains`);
//    }
//    register() {
//       console.log(`Welcome ${this.name} to ${this.region}`);
//       console.log(`You have register for ${this.grade} trek`);
//    }
// }

// let kalpesh = new trekking(`Leh`, `difficult`, `kalpesh`);

// // kalpesh.register();

// trekking.greetTrekker(`KD`);

const axiosRequest = require("axios");

axiosRequest
   .get("https://www.boredapi.com/api/activity")
   .then(response => {
      console.log(`You could ${response.data.activity}`);
   })
   .catch(error => {
      console.log(`Error ${error}`);
   });
 