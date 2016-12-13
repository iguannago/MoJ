var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('hello_world.html', {'message' : 'Hello world'});
});

module.exports = router;
