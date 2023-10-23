const mongoose = require("mongoose");
const Users = require("./Users");

//connecting to mongodb
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  const user = await Users.create({ name: "prince", age: 25 });
  user.name = "elon Musk";
  await user.save();
  console.log(user);
};

main().catch((err) => console.log(err));
