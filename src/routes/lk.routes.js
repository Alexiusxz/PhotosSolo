const router = require('express').Router();
const renderComponent = require('../utils/renderComponent');
const Lk = require('../views/Lk');
const { Entry } = require('../../db/models');

router.get('/', async (req, res) => {
  const myEntry = await Entry.findAll({ where: { userId: req.session.user.id }, order: [['createdAt', 'DESC']] });
  renderComponent(Lk, { myEntry }, res);
});

router.post('/', async (req, res) => {
  const { tag, img } = req.body;
  const { user } = req.session;

  try {
    Entry.create({
      userId: user.id, url: img, tag, rating: 0, visibility: 'block',
    });
    res.json(true);
  } catch (error) {
    res.json(false);
  }
});

router.delete('/', async (req, res) => {
  const { entryId } = req.body;
  try {
    await Entry.destroy({ where: { id: entryId } });
    res.json(true);
  } catch (error) {
    res.json(false);
  }
});
router.put('/', async (req, res) => {
  const { entryId } = req.body;
  try {
    await Entry.update({ visibility: 'none' }, { where: { id: entryId } });
    res.json(true);
  } catch (error) {
    res.json(false);
  }
});

module.exports = router;
