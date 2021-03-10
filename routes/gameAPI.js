const express = require("express");
const gameApi = express.Router();

const Game = require("../models/games");

gameApi.get("/", async (req, res) => {
  console.log(req.query);
  await Game.find(
    req.query,
    null,
    { sort: { rating: -1 }, limit: 20 },
    (err, obj) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(obj));
      res.send();
    }
  );
});

module.exports = gameApi;
