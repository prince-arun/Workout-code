const express = require("express");
const path = require("path");

const PORT = 5000;

//Initializing express
const app = express();

//starting a server
// app.get("/", (req, res) => {
//   res.send(`<h1>Welcome to Express.js</h1>`);
// });

//sending files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

//using reg expression to handle error
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//redirecting page permanently
app.get("/intro", (req, res) => {
  res.redirect(301, "/about");
});

//handling routing
const first = (req, res, next) => {
  console.log("first");
  next();
};

const second = (req, res, next) => {
  console.log("second");
  next();
};

const third = (req, res, ne) => {
  console.log("third");
  res.send("Finished Routing");
};

app.get("/array", [first, second, third]);
//managing errors
app.all("*", (req, res) => {
  res.status(404).send(`<h1> Page Not found </h1>`);
});

//listening to the server
app.listen(PORT, () => {
  console.log(`Server Running successfully at ${PORT}`);
});
