const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.post("/", (req, res) => {});
