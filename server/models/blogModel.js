const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    default: 'Blogpost'
  }
});

const blogModel = mongoose.model("blog", userSchema);
module.exports = blogModel;
