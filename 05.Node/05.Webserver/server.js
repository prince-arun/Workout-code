const http = require("http");
const PORT = 5000;
const fs = require("fs");
const path = require("path");

const htmlFile = fs.readFileSync(
  path.join(__dirname, "counter", "index.html"),
  "utf-8"
);
const cssFile = fs.readFileSync(
  path.join(__dirname, "counter", "style.css"),
  "utf-8"
);
const scriptFile = fs.readFileSync(
  path.join(__dirname, "counter", "script.js"),
  "utf-8"
);

//Creating a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssFile);
    res.end();
  } else if (req.url === "/script.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(scriptFile);
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write(`<h1> Sorry, Nothing Here </h1>`);
    res.end();
  }
});

const sr = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  }
});
//Listining server
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running successfully at ", PORT);
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running successfully");
  }
});
