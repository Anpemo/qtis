/* eslint-disable no-underscore-dangle */
const Review = require('../models/reviewModels');

function reviewControllers() {
  async function loadReview(req, res) {
    console.log('received in loadReview', req.params.parameter);
    const { parameter } = req.params;
    let query;
    if (Number(parameter)) {
      query = { productBarCode: parameter };
    } else {
      query = { productCategory: parameter };
    }
    try {
      const reviews = await Review.find(query).exec();
      res.json(reviews);
    } catch {
      res.send('Reviews not found');
      res.status(500);
    }
  }

  function createReview(req, res) {
    const newReview = new Review({
      ...req.body
    });

    newReview.save((error) => {
      if (error) {
        res.send('Review already exists');
        res.status(500);
      } else {
        res.json(newReview);
      }
    });
  }

  async function deleteReview(req, res) {
    const id = req.body._id;
    try {
      const review = await Review.findByIdAndDelete(id).exec();
      res.json(review);
    } catch {
      res.status(500);
      res.send('Review not found');
    }
  }

  return {
    loadReview,
    createReview,
    deleteReview
  };
}

module.exports = reviewControllers();
