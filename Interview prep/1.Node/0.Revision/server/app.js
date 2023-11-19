const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const Users = require("./models/userModel.js");

dotenv.config();
const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.CONNECT_URL;
app.use(express.json());

//getting sample data
const users = require("./data.js");

const newUser = new Users({
  id: 9,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  address: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    geo: {
      lat: "24.6463",
      lng: "-168.8889",
    },
  },
  phone: "(775)976-6794 x41206",
  website: "conrad.com",
  company: {
    name: "Yost and Sons",
    catchPhrase: "Switchable contextually-based project",
    bs: "aggregate real-time technologies",
  },
});

// newUser.save();
//starting basic server
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express Server");
});

//user request
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

//user request from db
app.get("/api/db/users", async (req, res) => {
  try {
    const result = await Users.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//server listening
const start = async () => {
  try {
    await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
      console.log(`Server is running successfully at PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
