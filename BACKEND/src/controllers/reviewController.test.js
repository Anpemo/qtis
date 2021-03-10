const {
  loadReview, createReview, deleteReview
} = require('./reviewController');
const Review = require('../models/reviewModels');

jest.mock('../models/reviewModels');

describe('Given a reviewControllers function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('When calling loadReview function', () => {
    test('Then it will call res.json with an _id', async () => {
      req = {
        body: {
          userId: 12
        }
      };
      Review.find.mockReturnValueOnce({ exec: jest.fn() });
      await loadReview(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.json without an _id', async () => {
      req = {
        body: {
          productId: 12
        }
      };
      Review.find.mockReturnValueOnce({ exec: jest.fn() });
      await loadReview(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('Then it will call res.send when does not find an equal', async () => {
      req = {
        body: {
          _id: null
        }
      };
      Review.find.mockImplementationOnce(() => {
        throw new Error('Error fetching user');
      });
      await loadReview(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling createReview function', () => {
    test('Then it will call res.json with a body', () => {
      req = {
        body: {}
      };
      const newReview = new Review({ ...req.body });
      newReview.save.mockImplementationOnce((callback) => { callback(false); });
      createReview(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without a body', () => {
      req = {
        body: null
      };
      const newReview = new Review({ ...req.body });
      newReview.save.mockImplementationOnce((callback) => { callback(true); });
      createReview(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('When calling deleteReview function', () => {
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      Review.findByIdAndDelete.mockReturnValueOnce({ exec: jest.fn() });
      await deleteReview(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without a body', async () => {
      req = {
        body: {
          _id: null
        }
      };
      Review.findByIdAndDelete.mockImplementationOnce(() => {
        throw new Error('Review not found');
      });
      await deleteReview(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
