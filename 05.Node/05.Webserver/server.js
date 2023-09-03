const http = require("http");
const PORT = 5000;
const fs = require("fs");

//Creating a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("page Not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

//Listining server
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running successfully at ", PORT);
  }
});
