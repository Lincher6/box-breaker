const Result = require('../models/result.model');

exports.getUserResults = function (name) {
    return Result.find({ name });
}

exports.getResults = function () {
    return Result.find().sort([['score', -1]]).limit(10);
}

exports.saveResult = async function (body) {
    const result = new Result(body);
    return await result.save();
}