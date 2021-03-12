const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const GuppyUser = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

GuppyUser.statics.checkPassword = async function(username, password) {
    const user = await this.findOne({username});
    console.log({user});

    if(!user){
        console.log("Prob here");
        return false;
    }
    if(await bcrypt.compare(password, user.password)){
        console.log("Compare password");
        return true;
    }
    console.log("Auto return false");
    return false;
}

module.exports = mongoose.model("users", GuppyUser);
