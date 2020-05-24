'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatMessageSchema = new Schema({
    author: {
        type:String,
        required: 'ForumMessage author required'
    },
    content: {
        type:String,
        required: 'ForumMessage content required'
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


module.exports = mongoose.model('ChatMessage',ChatMessageSchema);
