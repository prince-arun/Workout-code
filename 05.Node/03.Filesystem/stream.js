const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "A.file", "data.json"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(path.join(__dirname, "A.file", "newData.json"));

// rs.on("data", (chunk) => {
//   ws.write(chunk);
//   console.log("read & write stream completed");
// });

rs.pipe(ws);
