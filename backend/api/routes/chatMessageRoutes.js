'use strict';
module.exports = function(app) {
    var chatMessage = require('../controllers/chatMessageController');

    // todoList Routes

    app.route('/api/chatMessage/')
        .post(chatMessage.create_a_chat_message);

    app.route('/api/chatMessage/:courseId')
        .get(chatMessage.list_all_chat_message);



    app.route('/api/chatMessage/:chatMessageId')
        .get(chatMessage.read_a_chat_message)
        .put(chatMessage.update_a_chat_message)
        .delete(chatMessage.delete_a_chat_message);

    app.route('/api/event/chat')
        .get(chatMessage.get_event);

};
