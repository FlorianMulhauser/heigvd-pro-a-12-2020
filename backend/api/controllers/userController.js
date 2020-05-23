'use strict';
var crypto = require('crypto'); 
var mongoose = require('mongoose'),
User = mongoose.model('User'); // pour les user

exports.list_all_user = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.create_a_user = function(req, res) {
  hashPassword(req);
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
   
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

function hashPassword(req) {
  
  req.body.password_salt = crypto.randomBytes(16);
  req.body.password_salt = new Buffer.from(req.body.password_salt).toString('base64');
  console.log(req.body.password_salt);
  req.body.password_hash = crypto.pbkdf2Sync(req.body.password_hash,req.body.password_salt,100000,64,'sha512').toString('hex');
  
}