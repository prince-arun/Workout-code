import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h2> This is home page by Prince </h2>");
// });
// app.get("/blog", (req, res) => {
//   res.send("<h2> This is blog............... page by Prince </h2>");
// });

app.use(express.static("./Quote generator"));
app.listen(5000, () => {
  console.log("Server is running at localhost : 5000 successfully");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send("<h2> Page not found </h2>\n<a href='/'>click here </a>");
});
