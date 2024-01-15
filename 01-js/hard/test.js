let fName = "Kalpesh";

function checkName(name) {
   if (name != "Kalpesh") {
      console.log("error detected");
      
      throw new Error("Error");
   }
}

checkName("Test");
