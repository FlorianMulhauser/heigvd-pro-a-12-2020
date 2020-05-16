'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ForumMessageSchema = new Schema({
    author: {
      type:String, 
      required: 'ForumMessage author required'
    },
    title: {
      type:String, 
      required: 'ForumMessage title required'
    },
    content: {
      type:String, 
      required: 'ForumMessage content required'
    },
    upVote: {
      type: Number, 
    },
    downVote: {
      type: Number, 
    },
    course_id: {
      type: String,
      required: 'Un ForumMessage doit concerner un cours'
    },
    timestamp: {
    type: Date,
    default: Date.now
  }, 
});


module.exports = mongoose.model('ForumMessage',ForumMessageSchema);