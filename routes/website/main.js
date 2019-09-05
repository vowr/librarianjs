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
router.get('/', function(req, res, next) {
  res.locals.title = 'Home';
  res.render('vowr/index', res.locals);
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.locals.title = 'About VOWR';
  res.render('vowr/about', res.locals);
});

/* GET schedules page. */
router.get('/schedule', function(req, res, next) {
  res.locals.title = 'Schedules';
  res.render('vowr/schedule', res.locals);
});

/* GET programs page. */
router.get('/programs', function(req, res, next) {
  res.locals.title = 'Programs';
  res.render('siteIndex', res.locals);
});

/* GET sponsors page. */
router.get('/sponsors', function(req, res, next) {
  res.locals.title = 'Sponsors';
  res.render('siteIndex', res.locals);
});

/* GET donations page. */
router.get('/donations', function(req, res, next) {
  res.locals.title = 'Donations';
  res.render('siteIndex', res.locals);
});

module.exports = router;
