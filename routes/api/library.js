const express = require('express');
const router = express.Router();

router.use('/test', (req, res) => {
  res.json({test: true});
})

module.exports = router;
