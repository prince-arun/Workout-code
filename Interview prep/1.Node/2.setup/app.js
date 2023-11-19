const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Students = require("./models/students");
const dotenv = require("dotenv");
dotenv.config();

//initializing express
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
const CONNECT_URL = process.env.CONNECT_URL;

// const students = [
//   {
//     name: "arun prince",
//     age: 24,
//     batch: 2929,
//   },
//   {
//     name: "elon musk",
//     age: 50,
//     batch: 1990,
//   },
//   {
//     name: "Bill gates",
//     age: 65,
//     batch: 1980,
//   },
// ];

const students = new Students({
  name: "Arun Prince",
  isGood: true,
  age: 25,
});

// students.save();
//creating end point
app.get("/", (req, res) => {
  res.status(200).send("This is a express server");
});

app.get("/api/students", async (req, res) => {
  try {
    const result = await Students.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//params & find by id
app.get("/api/students/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await Students.findById(id);
    if (!students) {
      res.status(404).send("no data found");
    } else {
      res.status(200).json({ result });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

//post Requests
app.post("/api/students", async (req, res) => {
  const students = new Students(req.body);
  try {
    await students.save();
    // const result = await Students.find();
    res.status(201).json({ students });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.post("/", (req, res) => {
  res.status(200).send("This is a post request");
});

//put Requests
app.put("/api/students/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Students.replaceOne({ _id: id }, data);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//patch Request
app.patch("/api/students/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Students.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//Delete requests
app.delete("/api/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Students.deleteOne({ _id: id });
    res.status(200).json({ DeletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json(err.message);
  }
});
//listening server

const start = async () => {
  try {
    await mongoose.connect(CONNECT_URL);

    app.listen(PORT, () => {
      console.log("server is running at port " + PORT);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
