var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/', (req, res) => {
  res.locals.title = "Login - Turf Tracker";
  res.render('login/index')
})

router.post('/', passport.authenticate('local'), (req, res) => {
  res.redirect('/dashboard')
})

module.exports = router;
