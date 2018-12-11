const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quizapp', (err) => {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
});

module.exports = mongoose
