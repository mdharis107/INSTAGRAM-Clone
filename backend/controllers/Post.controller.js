// const multer = require("multer");

const { PostModel } = require("../models/Post.model");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     console.log(req.file,file)
//     cb(null, "test.jpg");
//   },
// });

// const uploads = multer({ dest: "./uploads" });

const postFeed = async (req, res) => {
  const { title, caption, location, user } = req.body;
 
  const image = req.file.originalname;
  // console.log(req)
  const feed = new PostModel({
    title,
    caption,
    location,
    image,
    user,
  });
  // console.log(user)
  console.log("post", feed);
  // await feed.save()

  // try {
  //   await feed.save();
  //   res.send({ msg: "Post added Successfully" });
  // } catch (err) {
  //   console.log(err);
  //   res.status(404).send({ msg: "Error Posting" });
  // }

  res.send("success");
};

module.exports = {
  postFeed,
};
