'use strict';
module.exports = function(app) {
  var forumMessage = require('../controllers/forumMessageController');

  // todoList Routes

app.route('/api/forumMessage/')
.post(forumMessage.create_a_forum_message);

 app.route('/api/forumMessage/:courseId')
    .get(forumMessage.list_all_forum_message);
   


  app.route('/api/forumMessage/:forumMessageId')
    .get(forumMessage.read_a_forum_message)
    .put(forumMessage.update_a_forum_message)
    .delete(forumMessage.delete_a_forum_message);

};