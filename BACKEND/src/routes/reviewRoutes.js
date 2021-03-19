const { Router } = require('express');
const controller = require('../controllers/reviewController');

function reviewRouter() {
  const router = Router();

  router
    .route('/:parameter')
    .get(controller.loadReview);
  router
    .route('/')
    .post(controller.createReview)
    .delete(controller.deleteReview);

  return router;
}

module.exports = reviewRouter();
