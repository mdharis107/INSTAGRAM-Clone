const { Router } = require("express");
const { addUser } = require("../controllers/User.controller");

const userRouter = Router();

userRouter.post("/signup", addUser);

module.exports = {
  userRouter,
};
