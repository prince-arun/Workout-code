// Creating a basic server

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello world</h1>");
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running successfully at ${PORT}`);
});
