const mongoose = require("mongoose");
const path = require("path");
const validator = require("validator");
require("dotenv").config({ path: path.join(__dirname, "../../", ".env") });

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },

//   email: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Not an Email");
//       }
//     },
//     trim: true,
//   },

//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (typeof value != Number) {
//         throw new Error("Age Must be a number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Sharma  ",
//   email: "ashish@ashish.com",
//   age: '27',
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const Task = mongoose.model('Tasks', {
//     taskName : {
//         type: String,
//         required : true
//     },
//     status :{
//         type: Boolean,
//         validate (value){
//             if(typeof value !== Boolean){
//                 throw new Error('Should be a Boolean value');
//             }
//         }
//     }
// })

// const task = new Task({
//     taskName: 'Learn Mongo Db',
//     status : true
// })

// task.save()
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
