'use strict';
module.exports = function(app) {
    var file = require('../controllers/fileController.js');



    app.route('/api/file/:filename')
        .get(file.Download_a_file);

    app.route('/api/file/upload')
        .post(file.upload_a_file );

};
