const User = require('../models/user.model');

exports.getUser = function (query) {
    return User.findOne(query);
}

exports.createUser = function (body) {
    const user = new User(body);
    return user.save();
}
exports.updateUser = function (filter, value) {
    return User.findOneAndUpdate(filter, value);
}
