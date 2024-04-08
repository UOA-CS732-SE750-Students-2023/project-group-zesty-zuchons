const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userEmail: String,
  familyName: String,
  givenName: String,
  userData: Object,
});

const user_info = mongoose.model('user_info', userSchema);

module.exports = user_info;
