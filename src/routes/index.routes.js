const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
  } else { res.redirect('/login'); }
});
module.exports = router;
