/* eslint-disable no-underscore-dangle */
const User = require('../models/userModels');

function userControllers() {
  async function loadUser(req, res) {
    const id = req.body._id;
    try {
      const user = await User.findById(id).exec();
      res.json(user);
    } catch {
      res.send('User not found');
      res.status(500);
    }
  }

  function createUser(req, res) {
    const newUser = new User({
      ...req.body
    });

    newUser.save((error) => {
      if (error) {
        res.send('User already exists');
        res.status(500);
      } else {
        res.json(newUser);
      }
    });
  }

  async function updateUser(req, res) {
    const id = req.body._id;
    const { body } = req;
    try {
      const modifiedUser = await User.findByIdAndUpdate(id, body, { new: true }).exec();
      res.json(modifiedUser);
    } catch {
      res.status(500);
      res.send('User not found');
    }
  }

  async function deleteUser(req, res) {
    const id = req.body._id;
    try {
      const user = await User.findByIdAndDelete(id).exec();
      res.json(user);
    } catch {
      res.status(500);
      res.send('User not found');
    }
  }

  return {
    loadUser,
    createUser,
    updateUser,
    deleteUser
  };
}

module.exports = userControllers();
