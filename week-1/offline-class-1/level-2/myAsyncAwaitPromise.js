// Simple callback function
const fs = require("fs");

// function displayResult(a, b, operation) {
//    const result = operation(a, b);
//    console.log(`Result is ${result}`);
// }

// function add(a, b) {
//    return a + b;
// }

// function multi(a, b) {
//    return a * b;
// }

// displayResult(4, 5, multi);
// displayResult(4, 5, add);

// ==========================================
// promise approach of asynchronous nature

function kiratsReadFile() {
   return new Promise(function (resolve) {
      fs.readFile("a.txt", "utf-8", function (err, data) {
         resolve(data);
      });
   });
}

function onDone(data) {
   console.log(data);
}

kiratsReadFile().then(onDone);
