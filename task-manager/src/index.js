const express = require("express");
const bcrypt = require('bcrypt');
const userRouter = require("../src/routes/user");
const taskRouter = require("../src/routes/task");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(3000, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Started");
});