'use strict';
module.exports = function(app) {
  var course = require('../controllers/courseController');

  // todoList Routes
  app.route('/courses')
    .get(course.list_all_course)
    .post(course.create_a_course);


  app.route('/courses/:courseId')
    .get(course.read_a_course)
    .put(course.update_a_course)
    .delete(course.delete_a_course);
};