var fs = require("fs");
var path = require("path");

fs.readFile(
  path.join(__dirname, "A.file", "text.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;

    console.log(data);
  }
);

//catching errors

process.on("uncaughtException", (err) => {
  console.error(`There is an error : ${err}`);
  process.exit(1);
});
