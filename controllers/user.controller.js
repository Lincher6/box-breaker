const config = require('config');
const UserService = require('../services/user.service');
const { DATE_DAY } = require("../lib/constants");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUser = async function (req, res, next) {
    try {
        const userId = req.user.id;
        const user = await UserService.getUser({ _id: userId });
        return res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

exports.getUsers = async function (req, res, next) {
    try {
        req.query.sortParams = JSON.parse(req.query.sortParams);
        const users = await UserService.getUsers(req.query);
        const totalUserCount = await UserService.getTotalUserCount(req.query.searchString);
        return res.status(200).json({ users, totalUserCount })
    } catch (error) {
        next(error);
    }
}

exports.login = async function ({ body }, res, next) {
    try {
        const user = await UserService.getUser({ login: body.login.trim() } );
        if (user) {
            if (bcrypt.compareSync(body.password, user.password)) {
                const token = jwt.sign(
                    {id: user._id, name: user.name, role: user.role, expires: Date.now() + DATE_DAY},
                    config.get('JWT_SECRET'),
                );
                return res.status(200).json({ user, token });
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
        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role, expires: Date.now() + DATE_DAY },
            config.get('JWT_SECRET')
        );
        return res.status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
}

exports.updateUser = async function({ body }, res, next) {
    try {
        const user = await UserService.updateUser({ login: body.login }, { [body.key]: body.value });
        return res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}