const mongoose = require("mongoose");
require("dotenv").config();

const Game = require("./models/games");
const igdbGames = require("./test.json");

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Game.insertMany(igdbGames)
  .then(() => {
    console.log("success");
    process.exit();
  })

  .catch((err) => {
    console.log(err);
  });
