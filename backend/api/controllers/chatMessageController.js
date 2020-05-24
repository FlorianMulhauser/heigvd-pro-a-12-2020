'use strict';

var mongoose = require('mongoose'),
    ChatMessage = mongoose.model('ChatMessage'); // pour les chat  message

exports.list_all_chat_message = function(req, res) {
    ChatMessage.find({course_id:req.params.courseId}, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};


exports.create_a_chat_message = function(req, res) {
    console.log(req.body);
    var new_chat_message = new ChatMessage(req.body);
    new_chat_message.save(function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};


exports.read_a_chat_message = function(req, res) {
    ChatMessage.findById(req.params.chatMessageId, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};


exports.update_a_chat_message = function(req, res) {
    ChatMessage.findOneAndUpdate({_id: req.params.chatMessageId}, req.body, {new: true}, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};

exports.delete_a_chat_message = function(req, res) {
    ChatMessage.remove({
        _id: req.params.chatMessageId
    }, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json({ message: 'chat message successfully deleted' });
    });
};
