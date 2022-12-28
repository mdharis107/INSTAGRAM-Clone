const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Instagram");
});

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
