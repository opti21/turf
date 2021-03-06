var express = require('express');
var router = express.Router();
var User = require("../models/user")

router.post('/', async (req, res) => {
  var user = await User.findOne({ username: req.body.username });
  try {
    if (!user) {
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      User.createUser(newUser, (err, user) => {
        if (err) throw err;
        res.redirect('/dashboard').end()
      });
    } else {
      res.status(500).redirect('/dashboard').end()
    }
  } catch (err) {
    console.log(err)
  }
});

router.get('/', (req, res) => {
  res.locals.title = "Register"
  res.render('register/index')
})

module.exports = router;
