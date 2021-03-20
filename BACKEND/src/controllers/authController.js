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

async function login(req, res) {
  console.log(req.body);
  const { email } = req.body;
  const user = await User.findOne({ email }).exec();
  res.status(200);
  res.json(user);
}

module.exports = { register, login };
