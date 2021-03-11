const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/signup", (req, res) => {
  res.status(200).json({message:"OK"});
});

router.post("/signup", (req, res) => {
  res.status(200).json({"username":req.body.username, "password":req.body.password});

  //need to use node fetch to add the data to the database
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