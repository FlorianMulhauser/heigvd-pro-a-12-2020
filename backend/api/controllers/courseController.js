'use strict';

var mongoose = require('mongoose'),
Course = mongoose.model('Course'); // pour les cours

exports.list_all_course = function(req, res) {
  Course.find({}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};




exports.create_a_course = function(req, res) {
  var new_course = new Course(req.body);
  new_course.save(function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};


exports.read_a_course = function(req, res) {
  Course.findById(req.params.courseId, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};


exports.update_a_course = function(req, res) {
  Course.findOneAndUpdate({_id: req.params.courseId}, req.body, {new: true}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};


exports.delete_a_course = function(req, res) {
  Course.remove({_id: req.params.courseId
  }, function(err, course) {
    if (err)
      res.send(err);
    res.json({ message: 'Course successfully deleted' });
  });
};
