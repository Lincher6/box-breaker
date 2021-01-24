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
        const { name, score } = req.body;
        await ResultServices.saveResult({ name, score });

        const userResults = await ResultServices.getUserResults(name);
        const hiScore = userResults.reduce((max, result) => {
            max = max > result.score ? max : result.score;
            return max;
        }, score)

        await UserServices.updateUser({ name }, { hiScore, $inc: { gamesPlayed: 1} });
        const results = await ResultServices.getResults();
        return res.status(200).json({ results, hiScore });
    } catch (error) {
        next(error);
    }
}