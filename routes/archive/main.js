const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'Archive Home';
  res.render('siteIndex', res.locals);
});

module.exports = router;
