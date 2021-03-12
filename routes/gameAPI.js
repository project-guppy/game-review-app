const express = require("express");
const gameApi = express.Router();

const Game = require("../models/games");

gameApi.get("/", async (req, res) => {
  console.log(req.query);
  await Game.find(
    req.query,
    null,
    { sort: { rating: -1 }, limit: 21 },
    (err, obj) => {
      res.status(200).json(obj);
    }
  );
  gameApi.put("/:id", (req, res) => {
    console.log(req.body);
    Game.updateOne(
      { id: req.params.id },
      { reviews: req.body[0] },
      {},
      (err, obj) => {
        if (err) console.log(error);
        else console.log("success");
        res.send({ status: 200 });
      }
    );
  });
});

module.exports = gameApi;
