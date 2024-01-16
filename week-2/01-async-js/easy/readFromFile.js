const fs = require("fs");
let counter = 0;

fs.readFile("a.txt", "utf-8", function (err, data) {
   let fileContent = data;
   console.log(`File contents are - ${fileContent}`);

   let fileNewContent = `new data entered in file \n`;

   for (let i = 0; i < 10000000; i++) {
      counter++;
   }

   fs.appendFile("a.txt", `${fileNewContent}`, () => {
      console.log("File Updated");
   });
});
console.log(`End of the program`);
