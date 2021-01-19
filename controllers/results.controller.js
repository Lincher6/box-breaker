const ResultServices = require('../services/result.service');
const UserServices = require('../services/user.service');

exports.getResults = async function (req, res, next) {
    try {
        const results = await ResultServices.getResults();
        return res.status(200).json({ results });
    } catch (error) {
        next(error);
    }
}

exports.saveResult = async function (req, res, next) {
    try {
        const { name, score, newHiScore } = req.body;
        await ResultServices.saveResult({ name, score });
        if (newHiScore) {
            await UserServices.updateUser({ name }, { hiScore: newHiScore });
        }
        const results = await ResultServices.getResults();
        return res.status(200).json({ results });
    } catch (error) {
        next(error);
    }
}