const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderComponent = require('../utils/renderComponent');
const SignUp = require('../views/SignUp');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderComponent(SignUp, {}, res);
});

router.post('/', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 5);
    await User.create({
      email, name, password: hashPassword, isAdmin: false,
    });
    res.json(200);
  } catch (error) {
    res.json(300);
  }
});

module.exports = router;
