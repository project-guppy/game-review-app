const router = Router();
const GuppyUser = "./models/users.js";

router.get("/signup", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {
    let username = new GuppyUser({username: username});
    username.save();
});



//Task: checking the password
// 1. Listen to the login page
// 2. When attempt to sign in, check username
// 3. If there is a user with the same username, compare password
// 4. Use hashing to compare password
// 5. If password is correct, allow login.
const checkUserLogInData = async() => {
    const password = await fetch(GuppyUser.password);
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const match = await bcrypt.compare(testSecondPassword, hashPassword);
  
    console.log(`Do passwords match? ${match}`);
  
    if (match){
      //allow login.
    }
  }
  checkUserLogInData();