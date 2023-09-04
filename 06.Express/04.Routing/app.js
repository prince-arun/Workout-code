const express = require("express");
const path = require("path");
const PORT = 5000;
const app = express();

//starting server
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", require("./routes/root"));
app.use("/routes", require("./routes/routes"));

//listening server
app.listen(PORT, () => {
  console.log(`server running successfully at ${PORT}`);
});
