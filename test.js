let fName = "Kalpesh";

function checkName(name) {
   if (!name == "Kalpesh") {
      throw new Error("name different");
   }
}

checkName("Test");
