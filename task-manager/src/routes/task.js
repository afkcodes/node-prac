const express = require("express");
const User = require("../db/model/task");
const router = express.Router();

router.post("/tasks", (req, res) => {
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

module.exports = router;