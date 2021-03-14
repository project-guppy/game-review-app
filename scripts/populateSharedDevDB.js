require("dotenv").config();
const mongoose = require("mongoose");

const { getVideoGames, writeToFile } = require("../lib/dummyDataCreator");
const Game = require("./models/games");
const reviews = require("../dummyVGData/reviews_Video_Games_5.json");

const GAMESREQUIRED = 200;

try {
  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const videoGames = getVideoGames(GAMESREQUIRED, { dummyReviews: reviews });
  Game.insertMany(videoGames)
    .then(() => {
      console.log("success");
      process.exit();
    })
    .catch((err) => {
      throw new Error(`unable to write to the db: ${err}`);
    });
} catch (err) {
  console.log(`db population failed: ${err}`);
}
