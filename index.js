const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
require("dotenv").config();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const gameApi = require("./routes/gameAPI.js");
const GuppyUser = require("./models/users");

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use("/api/v1/games", gameApi);

app.listen(3003, () => {
  console.log("express api server listening on port 3003");
});
