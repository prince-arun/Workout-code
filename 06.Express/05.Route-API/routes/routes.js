const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/main", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

router.get("/sub", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "sub.html"));
});

module.exports = router;
