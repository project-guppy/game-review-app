const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const GuppyUser = require("../models/users");

router.get("/signup", (req, res) => {
  res.status(200).json({message:"OK"});
});

router.post("/signup", (req, res) => {
  res.status(200).json({"username":req.body.username, "password":req.body.password});

  GuppyUser.create({username:req.body.username, password:req.body.password}, (err, obj) => {
    if(err){
      console.log(err);
      return
    }
    console.log(obj);
    console.log("Success");
  })
})

router.get("/login", (req, res) => {
  GuppyUser.find({username:req.body.username, password:req.body.password}, (err, obj) => {
    if(err){
      console.log(err);
      return
    }
    console.log(obj);
    console.log("Success");
  })
})

module.exports = router;





//Task: checking the password
// 1. Listen to the login page
// 2. When attempt to sign in, check username
// 3. If there is a user with the same username, compare password
// 4. Use hashing to compare password
// 5. If password is correct, allow login.
// const checkUserLogInData = async() => {
//     const password = await fetch(GuppyUser.password);
//     const hashPassword = await bcrypt.hash(password, saltRounds);
//     const match = await bcrypt.compare(testSecondPassword, hashPassword);
  
//     console.log(`Do passwords match? ${match}`);
  
//     if (match){
//       //allow login.
//     }
//   }
//   checkUserLogInData();