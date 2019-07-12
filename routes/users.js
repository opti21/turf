var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  res.locals.title = "Users"
  res.render('users/index', {});
});

module.exports = router;
