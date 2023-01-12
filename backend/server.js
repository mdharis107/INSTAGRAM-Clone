const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middlewares/authentication");
const { postRouter } = require("./routes/post.routes");
const { userRouter } = require("./routes/user.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Instagram");
});

app.use("/static",express.static("./uploads"))

app.use("/user", userRouter);

app.use(authentication);

app.use("/post", postRouter);

app.listen(PORT, async (req, res) => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Connection to DB is not Successful");
  }
  console.log(`Listening on PORT ${PORT}`);
});
