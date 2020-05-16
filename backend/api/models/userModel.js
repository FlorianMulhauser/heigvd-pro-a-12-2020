'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
      type:String, 
      required: 'username  required'
    },
    mail: {
      type:String, 
      required: 'mail required'
    },
    status: {
      type: String, 
    },
    course: {
      type:  [{ type : String, ref: 'Course' }],
    },
    password_hash: {
      type: String,
      required: 'an user need a password'
    }
    
});


module.exports = mongoose.model('User',UserSchema);