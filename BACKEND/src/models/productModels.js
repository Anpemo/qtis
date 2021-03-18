const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productBarCode: String,
    productPicture: String,
    brandName: String,
    productName: String,
    price: Number,
    productCategory: String
  }
);

module.exports = mongoose.model('Product', productSchema);
