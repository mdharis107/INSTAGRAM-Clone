const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.file.originalname);
  },
});

const uploads = multer({ storage: storage });

const postFeed =
  (uploads.single("image"),
  async (req, res) => {
    const { title, caption, location } = req.body;
    // const image = req.file.originalname;

    res.send(req.body);
  });

module.exports = {
  postFeed,
};
