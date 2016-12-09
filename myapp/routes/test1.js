var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test1', function(req, res) {
  res.send('Hi guys!, This is test1.');
});

module.exports = router;
