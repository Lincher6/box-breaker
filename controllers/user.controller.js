const UserService = require('../services/user.service');
const { DATE_DAY } = require("../lib/constants");
const bcrypt = require('bcrypt');

exports.getUser = async function (req, res, next) {
    try {
        const userId = req.cookies.userId;
        const user = await UserService.getUser({ _id: userId });
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

exports.login = async function ({ body }, res, next) {
    try {
        const user = await UserService.getUser({ login: body.login.trim() } );
        if (user) {
            if (bcrypt.compareSync(body.password, user.password)) {
                res.cookie('userId', user._id, { maxAge: DATE_DAY });
                return res.status(200).json(user);
            }
            return res.status(400).json({ password: 'Неверный пароль.' });
        }
        return res.status(404).json({ login: 'Пользователь не найден.' });
    } catch (error) {
        next(error);
    }
}

exports.createUser = async function({ body, ip }, res, next) {
    try {
        const user = await UserService.createUser({ ...body, userIp: ip });
        res.cookie('userId', user._id, { maxAge: DATE_DAY });
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}