const express = require('express');
const router = express.Router();

router.use((_req, res, next) => {
  res.locals.navbarleft = [
    {label: 'Archive Home', link: '/archive'},
    {label: 'Programs', link: '/archive/programs'},
    {label: 'Help', link: '/archive/help'},
  ];
  res.locals.navbarright = [
    {label: 'Admin Sign In', link: '/archive/gatekeeper/sign-in'},
  ];
  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.locals.title = 'VOWR Digital Archive';
  res.render('archive/index', res.locals);
});

router.get('/programs', (req, res, next) => {
  res.locals.title = 'Programs';
  res.render('archive/programs', res.locals);
});

router.get('/help', (req, res, next) => {
  res.locals.title = 'How to Use the Archive';
  res.render('archive/help', res.locals);
});


module.exports = router;
