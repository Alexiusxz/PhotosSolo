const router = require('express').Router();
const renderComponent = require('../utils/renderComponent');
const Home = require('../views/Home');

router.get('/', async (req, res) => {
  renderComponent(Home, { }, res);
});

module.exports = router;
