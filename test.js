const mongoose = require("mongoose");

async function main() {
   // connect to the database
   await mongoose.connect("mongodb://localhost:27017/test");

   // define a schema - a blueprint for the data
   const User = mongoose.model("User", { name: String });

   // create a new user with data
   const user = await User.findOne({ name: "Jane_replaced" });
   const user2 = await User.findById("65b49f0f7a9fad838615eda9");

   await user.save(); // save the user to the database

   user.name = "Jane_replaced_v2"; // change the name
   user2.name = "Jane_replaced_v4"; // change the name

   await user.save(); // save the user again

   await user2.save();
   console.log("saved!");
   await mongoose.disconnect();
}

main();
