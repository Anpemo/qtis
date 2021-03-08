const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    userId: String,
    productId: String,
    userName: String,
    userPicture: String,
    skinType: [String],
    hairType: [String],
    productPicture: String,
    brandName: String,
    productName: String,
    rating: Number,
    reviewText: String
  }
);

module.exports = mongoose.model('Review', reviewSchema);
