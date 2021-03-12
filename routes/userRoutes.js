const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const GuppyUser = require("../models/users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/signup", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.post("/signup", (req, res) => {
  GuppyUser.create({ username: req.body.username, password: req.body.password }, (err, obj) => { 
    if (err) {
      res.status(500).json(err);
    }
    else {
      password = bcrypt.hash(password, saltRounds);
      res.status(201).json(obj);
    }
  })
})

router.get("/login", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hash({password: req.body.password}, saltRounds);
  if (GuppyUser.checkPassword(username, password)) {
    GuppyUser.find({ username: req.body.username }, (err, obj) => {
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(obj);
      }
    });
    return;
  }
  res.status(401).json({status: "Not OK", err: "Unauthorized"});
})

module.exports = router;