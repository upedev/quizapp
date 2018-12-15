const mongoose = require('mongoose');

var Exam = mongoose.model('Exam', {
    id : { type : String },
    short_name : { type : String },
    name : { type : String },
    desc : { type : String }
}, 'exam');

module.exports = { Exam };