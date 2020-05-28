'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { 
      type:String, 
      required: 'username  required'
    },
    first_name: { 
        type:String,
        required: 'first name  required'
    },
    last_name: { 
        type:String,
        required: 'last name  required'
    },
    mail: {
      type:String, 
      required: 'mail required'
    },
    status: {
      type: String, 
      required: 'status required'
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
      required: 'salt required'
      
    },
    password_hashing_alg: {
      type: String,
    }
    
});


module.exports = mongoose.model('User',UserSchema);
