// setimeout fs.readFile Fetch are Async function
const fs = require("fs");



fs.readFile("a.txt", "utf-8", function (err, data) {
     console.log(`Hi There from TEXT File ${data}`);
});

setTimeout(() => {
     console.log("Hi from SetTimeout");
     return;
}, 6000);

console.log("hi there before FOR LOOP");

let a = 0;

for (i = 0; i <= 1000000000; i++) {
   a++;
}

console.log("Hi there after for Loop");
