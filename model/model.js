const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const subsSchema = new mongoose.Schema({
  emails: [
    {
      type: String,
    },
  ],
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  quote: { type: String, required: true },
  text: { type: String, required: true },
  views: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = {
  postModel: mongoose.model("posts", postSchema),
  userModel: mongoose.model("users", userSchema),
  subsModel: mongoose.model("subs", subsSchema),
};
