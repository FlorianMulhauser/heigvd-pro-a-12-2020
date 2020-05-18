'use strict';

module.exports = function(app) {
	var login = require('../controllers/loginController');

	app.route('/api/login').post(login.loginRoute);

}