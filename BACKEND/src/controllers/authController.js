const md5 = require('md5');
const User = require('../models/userModel');

async function register(req, res) {
  const { email, password, userName } = req.body;
  const newUser = new User({
    email,
    password: md5(password),
    userName
  });

  const existentUser = await User.findOne({ email }).exec();
  if (existentUser) {
    res.send('User already exists');
  } else {
    try {
      newUser.save();
      req.login(newUser, () => {
        res.json(newUser);
      });
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}

function login(req, res) {
  res.status(200);
  res.json(req.body);
}

module.exports = { register, login };
