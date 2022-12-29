const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");

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



module.exports = {
  addUser,
};
