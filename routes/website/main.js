const express = require('express');
const router = express.Router();

router.use((_req, res, next) => {
  res.locals.navbarleft = [
    {label: 'Home', link: '/vowr'},
    {label: 'About', link: '/vowr/about'},
    {label: 'Schedules', link: '/vowr/schedule'},
    {label: 'Programs', link: '/vowr/programs'},
    {label: 'Sponsors', link: '/vowr/sponsors'},
    {label: 'Donations', link: '/vowr/donations'},
  ];
  res.locals.navbarright = [
    {label: 'Archive', link: '/archive'},
    {label: 'Music Librarian', link: '/librarian'},
  ];
  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.locals.title = 'Celebrating 95 Years';
  res.render('vowr/index', res.locals);
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.locals.title = 'About VOWR';
  res.render('vowr/about', res.locals);
});

/* GET schedules page. */
router.get('/schedule', (req, res, next) => {
  res.locals.title = 'Schedules';
  res.render('vowr/schedule', res.locals);
});

/* GET programs page. */
router.get('/programs', (req, res, next) => {
  res.locals.title = 'Programs';
  res.render('vowr/programs', res.locals);
});

/* GET sponsors page. */
router.get('/sponsors', (req, res, next) => {
  res.locals.title = 'Sponsors';
  res.render('vowr/sponsors', res.locals);
});

/* GET donations page. */
router.get('/donations', (req, res, next) => {
  res.locals.title = 'Donations';
  res.render('vowr/donations', res.locals);
});

module.exports = router;
