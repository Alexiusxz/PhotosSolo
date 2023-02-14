const router = require('express').Router();

router.get('/', (req, res, next) => {
  req.session.destroy(() => {
    res.clearCookie('kyk');
    res.redirect('/');
  });
});

module.exports = router;
