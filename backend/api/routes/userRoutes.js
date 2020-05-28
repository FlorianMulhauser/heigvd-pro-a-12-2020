'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes

app.route('/api/user/')
.post(user.create_a_user)
.get(user.list_all_user);
   


  app.route('/api/user/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);

  app.route('/api/user/addCourse/:userId')
      .put(user.add_course_to_user)

};
