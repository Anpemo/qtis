const { Router } = require('express');
const controller = require('../controllers/productController');

function productRouter() {
  const router = Router();

  router
    .route('/:category')
    .get(controller.loadProduct)
    .post(controller.createProduct)
    .put(controller.updateProduct)
    .delete(controller.deleteProduct);

  return router;
}

module.exports = productRouter();
