'use strict';

var mongoose = require('mongoose'),
ForumMessage = mongoose.model('ForumMessage'); // pour les forum mesage

exports.list_all_forum_message = function(req, res) {
  ForumMessage.find({course_id:req.params.courseId}, function(err, forum_message) {
    if (err)
      res.send(err);
    res.json(forum_message);
  });
};




exports.create_a_forum_message = function(req, res) {
  console.log(req.body);
  var new_forum_message = new ForumMessage(req.body);
  new_forum_message.save(function(err, forum_message) {
    if (err)
      res.send(err);
    res.json(forum_message);
  });
};


exports.read_a_forum_message = function(req, res) {
  ForumMessage.findById(req.params.forumMessageId, function(err, forum_message) {
    if (err)
      res.send(err);
    res.json(forum_message);
  });
};


exports.update_a_forum_message = function(req, res) {
  ForumMessage.findOneAndUpdate({_id: req.params.forumMessageId}, req.body, {new: true}, function(err, forum_message) {
    if (err)
      res.send(err);
    res.json(forum_message);
  });
};


exports.delete_a_forum_message = function(req, res) {
  ForumMessage.remove({
    _id: req.params.forumMessageId
  }, function(err, forum_message) {
    if (err)
      res.send(err);
    res.json({ message: 'Forum message successfully deleted' });
  });
};