const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const GuppyUser = require("../models/users");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const saltRounds = 10;

router.get("/signup", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.post("/signup", async(req, res) => {
    hashPassword = await bcrypt.hash(req.body.password, saltRounds);
  
  GuppyUser.create({ username: req.body.username, password: hashPassword }, (err, obj) => { 
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(201).json(obj);
    }
  })
})

router.post("/login", (req, res) => {
  const { username, password } = req.body;
 
  if (GuppyUser.checkPassword(username, password)){
    console.log("Password was true");
    res.status(200).json({login: true});
  }
  else{
    console.log("Password was false");
    res.status(500).json({login: false});
  }
})

module.exports = router;