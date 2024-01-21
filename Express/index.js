const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("Hello World from Express");
});

app.put("/write", (req, res) => {
   const dataReceived = req.body;
   res.send(`Put request received`);
   console.log(dataReceived);
});

app.post("/postRequest", (req, res) => {
   res.send("This is post request");
});

app.listen(port, () => {
   console.log(`App is listening to port http://localhost:${port}/`);
});
