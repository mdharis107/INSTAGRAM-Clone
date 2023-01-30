const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({ msg: "Please Login again" });
  }

  const token = req.headers.authorization;
  jwt.verify(token, process.env.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      res.send({ msg: "Please login" });
    } else {
      console.log(decoded.user, "here");
      req.body.user = decoded.user;
      
      next();
    }
  });
};

module.exports = {
  authentication,
};
