const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const gameApi = require("./routes/gameAPI.js");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/games", gameApi);

app.listen(3003, () => {
  console.log("express api server listening on port 3003");
});
