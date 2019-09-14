const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.locals.parentUri = res.locals.uri;
  res.locals.uri = req.path;
  res.locals.navbarleft = [{ label: 'Home', link: '/' }];
  res.locals.navbarright = [];
  if (res.locals.authenticated) {
    res.locals.navbarleft.push({ label: 'Search', link: '/search' });
    res.locals.navbarleft.push({ label: 'My Lineups', link: '/lineup' });
    if (res.locals.master) {
      res.locals.navbarleft.push({ label: 'New Entry', link: '/new' });
    }
    res.locals.navbarright.push({
      label: `Hi, ${res.locals.username}. Sign out.`,
      link: '',
    });
  } else {
    res.locals.navbarright.push({ label: 'Sign In', link: '' });
    res.locals.navbarright.push({ label: 'Register', link: '' });
  }
  res.locals.navbarleft.push({ label: 'About', link: res.locals.parentUri + '/about' });
  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.locals.title = 'Home';
  res.render('siteIndex', res.locals);
});

module.exports = router;
