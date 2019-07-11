var express = require('express');
var router = express.Router();
var UserModel = require("../models/user")

router.get('/', async (req, res) => {
  try {
    res.locals.title = "Users";
    var result = await UserModel.find().exec();
    res.send(result)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
});

router.get ('/deleteall', (req,res) => {
  try{
    UserModel.deleteMany({}).exec();
    res.send({ message: 'all users deleted'})
  } catch (err) {
    res.sendStatus(500)
    console.log(err)
  }
})
module.exports = router;
