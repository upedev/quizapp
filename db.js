const mongoose = require('mongoose');
const database = "mongodb://127.0.0.1:27017/quizapp";

mongoose.connect(database, (err) => {
    if (err) {
        console.log("Database Connection Error : ", + err);
    } else {
        console.log("Database Connection Success : " + database);
    }
});

module.exports = mongoose
