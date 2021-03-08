const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId: String,
    productPicture: String,
    brandName: String,
    productName: String
  }
);

module.exports = mongoose.model('Product', productSchema);
