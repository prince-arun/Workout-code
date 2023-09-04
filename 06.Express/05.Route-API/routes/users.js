const express = require("express");
const path = require("path");
const router = express.Router();

data = {};
data.users = require("../data/user.json");

router
  .route("/")
  .get((req, res) => {
    res.status(200).json(data.users);
  })
  .post((req, res) => {
    res.status(200).json({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
  })
  .delete((req, res) => {
    res.status(200).json({ id: req.body.id });
  });

router.route("/:id").get((req, res) => {
  res.status(200).json({ id: req.params.id });
});

module.exports = router;
