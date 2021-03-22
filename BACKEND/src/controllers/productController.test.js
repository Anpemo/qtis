const {
  loadProduct, createProduct, updateProduct, deleteProduct
} = require('./productController');
const Product = require('../models/productModels');

jest.mock('../models/productModels');

describe('Given a productControllers function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('When calling loadProduct function', () => {
    test('Then it will call res.json with a number', async () => {
      req = {
        params: {
          parameter: 12
        }
      };
      Product.find.mockReturnValueOnce({ exec: jest.fn() });
      await loadProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.json with a string', async () => {
      req = {
        params: {
          parameter: 'aa'
        }
      };
      Product.find.mockReturnValueOnce({ exec: jest.fn() });
      await loadProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('Then it will call res.send when does not find an equal', async () => {
      req = {
        params: {
          parameter: null
        }
      };
      Product.find.mockImplementationOnce(() => {
        throw new Error('Error fetching product');
      });
      await loadProduct(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling createProduct function', () => {
    test('Then it will call res.json with a body', () => {
      req = {
        body: {}
      };
      const newProduct = new Product({ ...req.body });
      newProduct.save.mockImplementationOnce((callback) => { callback(false); });
      createProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without a body', () => {
      req = {
        body: null
      };
      const newProduct = new Product({ ...req.body });
      newProduct.save.mockImplementationOnce((callback) => { callback(true); });
      createProduct(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling updateProduct function', () => {
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      Product.findByIdAndUpdate.mockReturnValueOnce({ exec: jest.fn() });
      await updateProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without a body', async () => {
      req = {
        body: {
          _id: null
        }
      };
      Product.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('Product not found');
      });
      await updateProduct(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling deleteProduct function', () => {
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      Product.findByIdAndDelete.mockReturnValueOnce({ exec: jest.fn() });
      await deleteProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without a body', async () => {
      req = {
        body: {
          _id: null
        }
      };
      Product.findByIdAndDelete.mockImplementationOnce(() => {
        throw new Error('Product not found');
      });
      await deleteProduct(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
