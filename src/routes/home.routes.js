const router = require('express').Router();
const renderComponent = require('../utils/renderComponent');
const Home = require('../views/Home');
const { Entry } = require('../../db/models');
const { User } = require('../../db/models');
const { Like } = require('../../db/models');

router.get('/', async (req, res) => {
  const allEntries = await Entry.findAll({ include: 'L', order: [['rating', 'DESC']] });
  const users = await User.findAll({ include: Entry });
  // console.dir(users.map((el) => el.get({ plain: true })), { depth: null });
  // console.dir(allEntries.map((el) => el.get({ plain: true, nest: true })), { depth: null });
  renderComponent(Home, { allEntries, users }, res);
});

router.post('/like', async (req, res) => {
  try {
    const [like, created] = await Like.findOrCreate({ where: { user_id: req.session.user.id, entry_id: req.body.id } });
    if (created) {
      const entry = await Entry.findOne({ where: { id: req.body.id } });
      const counter = await entry.increment('rating', { by: 1 });
      res.json({ created, counter });
    } else {
      await Like.destroy({ where: { entry_id: req.body.id, user_id: req.session.user.id } });
      const entry = await Entry.findOne({ where: { id: req.body.id } });
      const counter = await entry.decrement('rating', { by: 1 });

      res.json({ created, counter });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/tag/:id', async (req, res) => {
  const allEntries = await Entry.findAll({ where: { tag: req.params.id }, include: 'L', order: [['createdAt', 'DESC']] });
  const users = await User.findAll({ include: Entry });
  renderComponent(Home, { allEntries, users }, res);
});

router.get('/user/:id', async (req, res) => {
  const allEntries = await Entry.findAll({ where: { userId: req.params.id }, include: 'L', order: [['createdAt', 'DESC']] });
  const users = await User.findAll({ include: Entry });
  renderComponent(Home, { allEntries, users }, res);
});

module.exports = router;
