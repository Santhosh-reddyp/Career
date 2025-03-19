const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    profilePicture: String,
    category: String
});

module.exports = mongoose.model('User', userSchema);