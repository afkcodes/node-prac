const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(next){
  const user = this;
  console.log(' called the middleware')
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();

})

const User = mongoose.model("User", userSchema);

module.exports = User;
