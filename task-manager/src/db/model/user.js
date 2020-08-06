const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model("User", {
    name: {
      type: String,
    },
  
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Not an Email");
        }
      },
      trim: true,
    },
  
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (typeof value < 0) {
          throw new Error("Age Must be a positive");
        }
      },
    },
    password: {
        type: String,
        required: true,
        trim: true,
      },
  });

module.exports = User;