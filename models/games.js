const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  id: { type: String, required: true },
  cover: String,
  genres: [{ type: String }],
  involved_companies: [{ type: String }],
  name: String,
  rating: Number,
  release_dates: [{ timestamp: Number, human: String }],
  screenshots: [{ type: String }],
  summary: String,
});

module.exports = mongoose.model("games", Game);
