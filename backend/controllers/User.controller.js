const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");
require("dotenv").config();

//Signup
const addUser = async (req, res) => {
  const { email, name, username, password } = req.body;
  const check = await UserModel.findOne({ username });
  if (check) {
    res.send({ msg: "Username already exist try different one" });
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.send({ msg: "Something went wrong, please try again later" });
      }
      const user = new UserModel({
        email,
        name,
        username,
        password: hash,
      });
      try {
        await user.save();
        res.send({ msg: "Sign up Successful" });
      } catch (err) {
        console.log(err);
        res.send({ msg: "Sign up failed, Please try again" });
      }
    });
  }
};

//Login

const LoginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (user) {
    const hash = user.password;

    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        res.status(500).send({ msg: "Something went wrong please try again later" });
      }

      if (result) {
        const token = jwt.sign({ username: username }, process.env.PRIVATE_KEY);
        res.send({ msg: "Login Successful", token });
      } else {
        res.status(404).send({ msg: "Invalid credentials, please signup if you haven't" });
      }
    });
  } else {
    res.status(404).send({ msg: "Please Register" });
  }
};

module.exports = {
  addUser,
  LoginUser,
};
