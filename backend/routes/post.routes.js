const { Router } = require("express");
const { postFeed } = require("../controllers/Post.controller");
const postRouter = Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // console.log(req, file);
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

postRouter.post("/addPost", uploads.single("image"), postFeed);

module.exports = {
  postRouter,
};
