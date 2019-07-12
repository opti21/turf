var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.locals.title = "Jobs"
    res.render('jobs/index');
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
