const express = require("express");
const User = require("../db/model/user");
const { update } = require("../db/model/user");
const router = express.Router();

router.post("/users", (req, res) => {
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

router.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

router.get("/user/:id", (req, res) => {
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

router.patch("/user/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["email", "name", "age", "password"];

  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(404).send("Invalid Update request");
  }

  try {
    console.log("Patching -- try");
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("server Error");
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
