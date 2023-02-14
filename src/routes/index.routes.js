const router = require('express').Router();
const renderComponent = require('../utils/renderComponent');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  renderComponent(Main, { }, res);
});

module.exports = router;
