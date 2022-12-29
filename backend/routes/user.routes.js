const { Router } = require("express");
const { addUser, LoginUser } = require("../controllers/User.controller");

const userRouter = Router();

userRouter.post("/signup", addUser);

userRouter.post("/login", LoginUser);

module.exports = {
  userRouter,
};
