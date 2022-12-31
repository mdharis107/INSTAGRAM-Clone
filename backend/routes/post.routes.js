const { Router } = require("express");
const { postFeed } = require("../controllers/Post.controller");

const postRouter = Router();

postRouter.post("/addPost", postFeed);

module.exports = {
  postRouter,
};
