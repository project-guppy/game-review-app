const mongoose = require("mongoose");

const GuppyUser = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model("users", GuppyUser);
