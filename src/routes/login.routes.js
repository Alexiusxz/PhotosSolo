const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderComponent = require('../utils/renderComponent');
const Login = require('../views/Login');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
  } else { renderComponent(Login, {}, res); }
});

router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password); // валидность пароля
      if (isValid) {
        req.session.user = { id: user.id, name: user.name }; // записываем данные в сессии
        req.session.save(() => {
          res.redirect('/home');
        });
        return;
      }
      throw new Error();
    }
    throw new Error();
  } catch (error) {
    res.redirect('/');
  }
});

module.exports = router;
