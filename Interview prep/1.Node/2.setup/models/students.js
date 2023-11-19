const mongoose = require("mongoose");

//creating schema
const studentsSchema = new mongoose.Schema({
  name: String,
  isGood: String,
  age: Number,
});

module.exports = mongoose.model("Students", studentsSchema);
