/* eslint-disable no-underscore-dangle */
const Product = require('../models/productModels');

function productControllers() {
  async function loadProduct(req, res) {
    let query;
    if (req.body._id) {
      query = { userId: req.body.userId };
    } else {
      query = {};
    }
    try {
      const product = await Product.find(query).exec();
      res.json(product);
    } catch {
      res.send('Product not found');
      res.status(500);
    }
  }

  function createProduct(req, res) {
    const newProduct = new Product({
      ...req.body
    });

    newProduct.save((error) => {
      if (error) {
        res.send('Product already exists');
        res.status(500);
      } else {
        res.json(newProduct);
      }
    });
  }

  async function updateProduct(req, res) {
    const id = req.body._id;
    const { body } = req;
    try {
      const modifiedProduct = await Product.findByIdAndUpdate(id, body, { new: true }).exec();
      res.json(modifiedProduct);
    } catch {
      res.status(500);
      res.send('Product not found');
    }
  }

  async function deleteProduct(req, res) {
    const id = req.body._id;
    try {
      const product = await Product.findByIdAndDelete(id).exec();
      res.json(product);
    } catch {
      res.status(500);
      res.send('Product not found');
    }
  }

  return {
    loadProduct,
    createProduct,
    updateProduct,
    deleteProduct
  };
}

module.exports = productControllers();
