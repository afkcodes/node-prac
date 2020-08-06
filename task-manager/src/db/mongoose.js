const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../", ".env") });

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, (err,res)=>{
  if(!err){
    console.log('connected')
  }
});


