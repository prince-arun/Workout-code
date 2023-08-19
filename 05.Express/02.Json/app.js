import express from "express";
import { users } from "./data.js";

const app = express();

//Starting a server

app.get("/", (req, res) => {
  res.send(`<p><a href="/users"> User's specific Details will be displayed here </a></p>
  <br/>
   <p><a href="/alluser">Whole User's Details will be displayed here </a></p>
  `);
});

//user details displayed as requirements
app.get("/users", (req, res) => {
  let allUsers = users.map(({ id, name, username, email, phone, website }) => {
    return {
      id,
      name,
      username,
      email,
      phone,
      website,
    };
  });

  res.status(200).json(allUsers);
});

//all user details displayed

app.get("/alluser", (req, res) => {
  res.status(200).json({ message: "whole user's data", data: users });
});

//displaying specific data using params

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  let singleUser = users.find((user) => {
    return user.id === Number(id);
  });
  if (!singleUser) {
    return res.status(400).json({
      message: `User id = ${id} does not exists`,
    });
  }
  res.status(200).json(singleUser);
});

app.listen(5000, () => {
  console.log(`server is running successfully`);
});
