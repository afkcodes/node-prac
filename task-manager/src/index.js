const express = require("express");
const User = require("./db/model/user");
const Task = require("./db/model/task");

require("./db/mongoose");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(" Error Happened try Again Later");
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);

      res.status(400).send(" Error Happened try Again Later");
    });
});

app.listen(3000, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Started");
});
