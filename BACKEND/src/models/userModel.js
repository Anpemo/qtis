const mongoose = require('mongoose');
const md5 = require('md5');

const userSchema = new mongoose.Schema(
  {
    userName: String,
    age: Number,
    picture: String,
    email: String,
    password: String,
    userPicture: String,
    city: String,
    skinType: [String],
    hairType: [String],
    favourites: [{
      productId: String
    }]
  }
);
userSchema.methods.validPassword = function validPassword(pwd) {
  return this.password === md5(pwd);
};
module.exports = mongoose.model('User', userSchema);
