'use strict';
module.exports = function(app) {
  var course = require('../controllers/courseController');

  // todoList Routes
  app.route('/api/courses')
    .get(course.list_all_course)
    .post(course.create_a_course);


  app.route('/api/courses/:courseId')
    .get(course.read_a_course)
    .put(course.update_a_course)
    .delete(course.delete_a_course);

};