const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email: String,
    phone: Number,
    password: String,
});


const User = mongoose.model("User", userSchema);

module.exports = User;
