const express = require("express");

const PORT = 5000;

//Initializing express
const app = express();

//starting a server
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Express.js</h1>`);
});

//listening to the server
app.listen(PORT, () => {
  console.log(`Server Running successfully at ${PORT}`);
});
