const User = require('../models/user.model');

exports.getUser = function (query) {
    return User.findOne(query);
}

exports.getUsers = function ({ pageSize = 10, page = 1, searchString = '', sortParams = { hiScore: 1 } }) {
    const regex = new RegExp(searchString);
    return User.find({ $or: [{ login: regex }, { name: regex }, { userIp: regex } ] })
        .sort(sortParams)
        .skip(pageSize * (page - 1))
        .limit(+pageSize);
}

exports.getTotalUserCount = function (searchString = '') {
    return User.countDocuments({ name: RegExp(searchString) });
}

exports.createUser = function (body) {
    const user = new User(body);
    return user.save();
}

exports.updateUser = function (filter, value) {
    return User.findOneAndUpdate(filter, value, { new: true });
}
