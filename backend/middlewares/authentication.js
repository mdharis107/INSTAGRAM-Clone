const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, res) => {
  if (!req.headers.authorization) {
    return res.send({ msg: "Please Login again" });
  }

  const token = req.headers.authorization;
  jwt.verify(token, process.env.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      res.send({ msg: "Please login" });
    } else {
      req.body.username = decoded.username;
      next();
    }
  });
};

module.exports = {
  authentication,
};
