'use strict';
var crypto = require('crypto'); 
var mongoose = require('mongoose'),
User = mongoose.model('User'); // pour les user
var rH = require('./rightHelper');


exports.list_all_user = function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      res.send(err);

    // for security issue (even tho we have salt but it's not good to display all 
    // password hash to anyone that is an admin)
    // password hashing alg is useless also
    users.forEach(user => {
      user.password_hash         = undefined;
      user.password_salt         = undefined;
      user.password_hashing_alg  = undefined;
  });
    
    res.json(users);
  });
};


exports.add_course_to_user = function(req, res) {
  if(rH.isAdmin(req)) {
  User.findOne(req.params.userId, function(err, user) {

    if (err)
      res.send(err);

    user.course.push(req.body);

    User.findOneAndUpdate(user._id,user,{new: true},function(err, res) {
      if (err)
        res.send(err);
      res.json(res);
    });

    res.json(user);
  });
} else {
  res.sendStatus(403);
}
};


exports.create_a_user = function(req, res) {
   // ce switch  permet d'être sur que seulement un superadmin peut faire un superadmin
   // un admin un admin , et un user ne peut creer que des users normaux
  switch(req.body.status) {
    case "superadmin":
    if(req.user.status == "superadmin")
      req.body.status = "superadmin";
      break;

    case "admin":
    if(req.user.status == "admin" || req.user.status == "superadmin")
      req.body.status = "admin";
      break;

    default:
    req.body.status = "user";
  }

  hashPassword(req);
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);   
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  if(rH.isAdmin(req)) {
  User.findOne(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
} else {
  res.sendStatus(403);
}
};


exports.update_a_user = function(req, res) {
  if(req.user.status == "superadmin"){ 
    //on veut pas update les fields pas remplis
    for(var key in req.body) {
      if(req.body[key] == "")
        delete req.body[key];
  }
  

  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
} else {
  res.sendStatus(403);
}
};


exports.delete_a_user = function(req, res) {
  if(req.user.status == "superadmin") {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
} else {
  res.sendStatus(403);
}
};

function hashPassword(req) {
  
  req.body.password_salt = crypto.randomBytes(16);
  req.body.password_salt = new Buffer.from(req.body.password_salt).toString('base64');
  req.body.password_hash = crypto.pbkdf2Sync(req.body.password_hash,req.body.password_salt,100000,64,'sha512').toString('hex');
  
}
