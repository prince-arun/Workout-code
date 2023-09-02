const fsPromise = require("fs").promises;

const path = require("path");

const read = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "A.file", "text.txt"),
      "utf-8"
    );
    console.log(data);
    console.log("Read file completed");
    await fsPromise.writeFile(
      path.join(__dirname, "A.file", "promise.txt"),
      "New promise text"
    );
    console.log("Write file completed");
    await fsPromise.appendFile(
      path.join(__dirname, "A.file", "promise.txt"),
      "\nSecond New promise text"
    );
    console.log("Append completed");
    await fsPromise.rename(
      path.join(__dirname, "A.file", "promise.txt"),
      path.join(__dirname, "A.file", "Rename-promise.txt")
    );
    console.log("Rename file completed");
    await fsPromise.unlink(path.join(__dirname, "A.file", "new.txt"));
    console.log("File deleted");
  } catch (err) {
    console.error(err);
  }
};

read();

process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});
