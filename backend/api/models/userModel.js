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
    },
    password_salt: {
      type: String,
      required: 'salt is important !'
    },
    password_hashing_alg: {
      type: String,
      required: 'in case we change alg'
    }
    
});


module.exports = mongoose.model('User',UserSchema);