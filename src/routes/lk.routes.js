const router = require('express').Router();
const renderComponent = require('../utils/renderComponent');
const Lk = require('../views/Lk');

router.get('/', async (req, res) => {
  renderComponent(Lk, { }, res);
});

// router.post()
module.exports = router;
