const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FSTodo");

const TodoSchema = new mongoose.Schema({
   title: String,
   description: String,
   completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
   Todo,
};
