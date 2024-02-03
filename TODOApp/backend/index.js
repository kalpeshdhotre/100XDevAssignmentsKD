const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors);

app.post("/todos", async (req, res) => {
   const payload = req.body;
   const pasredPayload = createTodo.safeParse(payload);
   if (!pasredPayload.success) {
      res.status(411).json({
         msg: "You send wrong inputs",
      });
      return;
   }
   await Todo.create({
      title: payload.title,
      description: payload.description,
      completed: false,
   });
   res.json({ message: "todo Created" });
});

app.get("/todos", async (req, res) => {
   const allTodos = await Todo.find();
   res.json(allTodos);
});

app.post("/completed", async (req, res) => {
   const payload = req.body;
   const parsedPayload = updateTodo.safeParse(payload);
   if (!parsedPayload.success) {
      res.status(411).json({
         msg: "you send wrong inputs",
      });
   }
   await todo.update(
      {
         _id: req.body._id,
      },
      {
         completed: true,
      }
   );
   res.json({
      msg: "Todo marked as DONE",
   });
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
