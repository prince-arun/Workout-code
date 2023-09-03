const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.join(__dirname, "A.file", "B.file"))) {
  fs.mkdir(path.join(__dirname, "A.file", "B.file"), (err) => {
    if (err) throw err;
    console.log("new dir created successfully");
  });
}

if (fs.existsSync("./B.file")) {
  fs.rmdir("./B.file", (err) => {
    if (err) throw err;
    console.log("dir removed successfully.");
  });
}

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
