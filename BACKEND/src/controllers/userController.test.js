const {
  loadUser, createUser, updateUser, deleteUser
} = require('./userControllers');
const User = require('../models/userModels');

jest.mock('../models/userModels');

describe('Given a userControllers function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('When calling loadUser function', () => {
    test('Then it will call res.json with an _id', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      User.findById.mockReturnValueOnce({ exec: jest.fn() });
      await loadUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.send without an _id', async () => {
      req = {
        body: {
          _id: null
        }
      };
      User.findById.mockImplementationOnce(() => {
        throw new Error('Error fetching user');
      });
      await loadUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('When calling createUser function ', () => {
    test('Then it will call res.json with a body', () => {
      req = {
        body: {
          _id: 12
        }
      };
      const newUser = new User(req.body);
      newUser.save.mockImplementationOnce((callback) => { callback(false); });
      createUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });

    test('Then it will call res.send without body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      const newUser = new User(req.body);
      newUser.save.mockImplementationOnce((callback) => { callback(true); });
      createUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling updateUser function ', () => {
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      User.findByIdAndUpdate.mockReturnValueOnce({ exec: jest.fn() });
      await updateUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: null
        }
      };
      User.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('Error fetching user');
      });
      await updateUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When calling deleteUser function ', () => {
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: 12
        }
      };
      User.findByIdAndDelete.mockReturnValueOnce({ exec: jest.fn() });
      await deleteUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.json with a body', async () => {
      req = {
        body: {
          _id: null
        }
      };
      User.findByIdAndDelete.mockImplementationOnce(() => {
        throw new Error('Error fetching user');
      });
      await deleteUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
