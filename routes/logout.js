var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  res.redirect('/')
})

module.exports = router;
