var fs = require("fs");
var path = require("path");

//readFile modules in filesystem

fs.readFile(
  path.join(__dirname, "A.file", "text.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;

    console.log(data);
  }
);

//writeFile modules & appending
fs.writeFile(
  path.join(__dirname, "A.file", "new.txt"),
  "write filesystem completed",
  (err) => {
    if (err) throw err;
    console.log("write completed");
    fs.appendFile(
      path.join(__dirname, "A.file", "new.txt"),
      "\nsecond line write completed",
      (err) => {
        if (err) throw err;
        console.log("append completed");
      }
    );
  }
);

//writeFiles in loop
for (let i = 0; i < 3; i++) {
  fs.appendFile(
    path.join(__dirname, "A.file", "loop.txt"),
    "\nhello, world",
    (err) => {
      if (err) throw err;
      console.log("loop completed");
    }
  );
}

//========================================================================================//
//catching errors

process.on("uncaughtException", (err) => {
  console.error(`There is an error : ${err}`);
  process.exit(1);
});
