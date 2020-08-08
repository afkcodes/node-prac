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

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send();
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

app.get("/user/:id", (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user Found");
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send("Server Error");
    });
});

app.listen(3000, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Started");
});
