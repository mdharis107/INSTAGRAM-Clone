const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Instagram");
});

app.use("/user", userRouter);

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
