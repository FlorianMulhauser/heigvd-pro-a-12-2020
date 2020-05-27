'use strict';

var mongoose = require('mongoose'),
ForumMessage = mongoose.model('ForumMessage'); // pour les forum mesage

var User = mongoose.model('User'); // pour les user
var rH = require('./rightHelper'); // utilitaire pour manage les rights
const EventEmitter = require('events');

const stream = new EventEmitter();

exports.get_event = function(req,res){
  res.writeHead(200, {
    'Content-Type':'text/event-stream',
    'Cache-Control':'no-cache',
    Connection: 'keep-alive'
  });


  stream.on('push', function (event, data) {
    res.write('event:'+String(event)+'\n'+'data:'+ JSON.stringify(data)+'\n\n');
  })
};




exports.list_all_forum_message = function(req, res) {
  ForumMessage.find({course_id:req.params.courseId}, function(err, forum_message) {
    if (err)
      res.send(err);
    res.json(forum_message);
  });
};




exports.create_a_forum_message = function(req, res) {
  var new_form_message = new ForumMessage(req.body);

  new_form_message.save(function(err, form_message) {
    if (err)
      res.send(err);
      res.json(form_message);
    });

  stream.emit('push','message',{msg: 'new_chat_message'});
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

  stream.emit('push','message',{msg: 'update_chat_message'});
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
