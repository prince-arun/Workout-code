const exp = require("constants");
const express = require("express");
const path = require("path");
const PORT = 5000;

const app = express();

//Custom Middlewares
//example : log events
app.use((req, res, next) => {
  console.log(` ${req.method}\t${req.path}  ${req.url}\t${req.headers.origin}`);
  next();
});

//built in middleware
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//starting server
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//listening server
app.listen(PORT, () => {
  console.log("server running successfully :", PORT);
});
