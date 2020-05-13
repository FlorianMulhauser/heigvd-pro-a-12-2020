'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseShema = new Schema({
    id: {
      type: Number,
      required: 'Course ID required'
    },
    description: {
      type:String, 
      required: 'Course name required'
    },
    name: {
      type:String, 
      required: 'Course shortName required'
    },
    created_date: {
    type: Date,
    default: Date.now
  }, 
});


module.exports = mongoose.model('Course',CourseShema);