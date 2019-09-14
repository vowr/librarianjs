const express = require('express');
const router = express.Router();

const archiveRouter = require('./archive');
const libraryRouter = require('./library');

router.use((_req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router.use('/archive', archiveRouter);
router.use('/library', libraryRouter);

router.use('*', (req, res) => {
  res.end();
})

module.exports = router;