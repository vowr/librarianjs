const express = require('express');
const router = express.Router();

const db = require('../../backend/db');

router.use('/getAllPrograms', (req, res) => {
  res.json({test: true});
})

module.exports = router;
