const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  image: String,
  caption: [String],
  location: String,
  userId: { type: String, required: true },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};
