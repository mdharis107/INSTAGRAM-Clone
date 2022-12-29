const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, max: 12 },
  password: { type: String, required: true, min: 8 },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
