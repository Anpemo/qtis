const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: String,
    age: Number,
    picture: String,
    email: String,
    password: String,
    skinType: [String],
    hairType: [String],
    favourites: [{
      productId: String
    }]
  }
);

module.exports = mongoose.model('User', userSchema);
