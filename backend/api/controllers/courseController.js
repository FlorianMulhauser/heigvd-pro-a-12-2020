'use strict';

var mongoose = require('mongoose'),
Course = mongoose.model('Course'); // pour les cours
var rH = require('./rightHelper');

exports.list_all_course = function(req, res) {
  Course.find({}, function(err, course) {
    if (err)
      res.send(err);

    if(rH.isAdmin(req)) {
      res.json(course);
    } else {
      // only sends course that user has
       // select intersection of user.course and course and return it
      course = course.filter(field => -1 != req.user.course.indexOf(field._id) )
      res.json(course);
    }
  });
};




exports.create_a_course = function(req, res) {
  if(rH.isAdmin(req)) {
  var new_course = new Course(req.body);
  new_course.save(function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
} else { //if not admin
  res.sendStatus(403);
}
};


exports.read_a_course = function(req, res) {
  Course.findById(req.params.courseId, function(err, course) {
    if (err)
      res.send(err);
    if(rH.isAdmin(req) || -1 != req.user.course.indexOf(req.params.courseId)) {
      res.json(course);
    } else {
      res.sendStatus(403);
    }
  });
};


exports.update_a_course = function(req, res) {
  if(rH.isAdmin(req)) {
  Course.findOneAndUpdate({_id: req.params.courseId}, req.body, {new: true}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
} else {
  res.sendStatus(403);
}
};


exports.delete_a_course = function(req, res) {
  if(rH.isAdmin(req)) {
  Course.remove({
    _id: req.params.courseId
  }, function(err, course) {
    if (err)
      res.send(err);
    res.json({ message: 'Course successfully deleted' });
  });
} else {
  res.sendStatus(403);
}
};