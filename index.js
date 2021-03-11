const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const gameApi = require("./routes/gameAPI.js");
const userRoutes = require("./routes/userRoutes");
const cors= require('cors');

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/v1/games", gameApi);
app.use("/users", userRoutes);

app.listen(3003, () => {
  console.log("express api server listening on port 3003");
});
