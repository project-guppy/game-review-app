const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const GuppyUser = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

GuppyUser.statics.checkPassword = async function(username, password) {
    const user = await this.findOne({username});
    if(!user){
        return false;
    }
    if(await bcrypt.compare(password, user.password)){
        return true;
    }
    return false;
}

module.exports = mongoose.model("users", GuppyUser);
