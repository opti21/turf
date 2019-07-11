var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.locals.title = "Dashboard"
    res.render('dashboard/index');
  } else {
    res.redirect('/login')
  }
});

module.exports = router;
