var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.locals.title = "Logging Out";
  req.logout();
  res.redirect('/')
})

module.exports = router;
