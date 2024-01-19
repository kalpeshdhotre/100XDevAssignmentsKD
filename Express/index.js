const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("Hello World from Express");
});

app.listen(port, () => {
   console.log(`App is listening to port http://localhost:${port}/`);
});
