var express = require('express');
var router = express.Router();
var Section = require('../models/section')

router.get('/', async (req, res) => {
  if (req.user) {
    try {
      const sections = await Section.find();
      res.render('sections/index', {
        title: 'Sections',
        sections: sections
      })
    } catch {
      res.redirect('sections/index')
    }
  } else {
    res.redirect('/login')
  }
});

router.post('/add_section', async(req, res) => {
  if (req.user) {
    var section = await Section.findOne({ name: req.body.name });
    if (!section) {
      var newSection = new Section({
        name: req.body.name,
        jobs: []
      })
    
      newSection.save(function (err, Section) {
        if (err) {
          return console.log(err);
        } else {
          res.status(200).send('Success')
          console.log('Section Saved')
        }
      })
    } else {
      res.status(500).send('Section already exists')
    }
  } else {
    res.redirect('/login')
  }
});

router.get('/delete/:id', async(req, res) => {
  if (req.user) {
      await Section.deleteOne({ _id: req.params.id}).exec().then(
        res.status(200).send('Section deleted')
      ), function (err) {
        console.error(err)
        res.status(500).send('Error deleting section')
      };
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
