const express = require("express");
const gameApi = express.Router();

const Game = require("../models/games");

gameApi.get("/", (req, res) => {
  console.log(req.query);
  Game.find(req.query, (err, obj) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(obj));
    res.send();
  });
});

module.exports = gameApi;
