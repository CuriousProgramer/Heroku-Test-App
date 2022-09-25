const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = express();

app.get("/", (req, res, next) => {
  res.send("Heroku Test App");
});

app.listen(4000, () => {
  console.log("App is running on port");
});
