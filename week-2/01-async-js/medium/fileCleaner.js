const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
   console.log(`Original File data \n ${data}`);

   let cleanedfileData = data.replace(/(\s+)/g, " ");

   console.log(`Modified File data \n ${cleanedfileData}`);

   fs.writeFile("a.txt", `${cleanedfileData}`, () => {
      console.log("File updated with cleaned Data");
   });
});
