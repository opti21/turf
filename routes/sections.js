var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.locals.title = "Sections"
    res.render('sections/index');
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
