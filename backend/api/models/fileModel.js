'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FileShema = new Schema({
    file: {
        type: Array
    }
});


module.exports = mongoose.model('File',FileShema);
