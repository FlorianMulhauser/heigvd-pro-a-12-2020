'use strict';

var mongoose = require('mongoose'),
    ChatMessage = mongoose.model('ChatMessage'); // pour les chat  messa
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

exports.list_all_chat_message = function(req, res) {
    ChatMessage.find({course_id:req.params.courseId}, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};


exports.create_a_chat_message = function(req, res) {
    var new_chat_message = new ChatMessage(req.body);

    new_chat_message.save(function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });

    stream.emit('push','message',{msg: 'new_chat_message'});


};


exports.read_a_chat_message = function(req, res) {
    ChatMessage.findById(req.params.chatMessageId, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    });
};


exports.update_a_chat_message = function(req, res) {
    if(rH.isAdmin(req)) {
    ChatMessage.findOneAndUpdate({_id: req.params.chatMessageId}, req.body, {new: true}, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json(chat_message);
    }); } else {
        res.sendStatus(403);
    }
};

exports.delete_a_chat_message = function(req, res) {
    if(rH.isAdmin(req)) {
    ChatMessage.remove({
        _id: req.params.chatMessageId
    }, function(err, chat_message) {
        if (err)
            res.send(err);
        res.json({ message: 'chat message successfully deleted' });
    }); } else {
        res.sendStatus(403);
    }
};



