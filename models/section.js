const mongoose = require('mongoose')

var SectionSchema = mongoose.Schema({
    name: {
      type: String,
      requied: true
    },
    jobs: {
      type: Array
    }
})

var Section = module.exports = mongoose.model('Section', SectionSchema)