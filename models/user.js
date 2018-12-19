const mongoose = require('mongoose');

// User schema
const UserSchema = mongoose.Schema({
    name: { type: String, required : true },
    email: { type: String, required : true },
    username: { type: String, required : true },
    password: { type: String, required : true }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByID = function(id, callback){
    User.findById(id, callback)
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}