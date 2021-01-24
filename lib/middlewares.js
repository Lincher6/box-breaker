const path = require('path');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = {
    protectedRoute(req, res, next) {
        if (!req.user.id) {
            return res.status(401).json({ message: 'not authorized' });
        }
        return next();
    },

    adminRoute(req, res, next) {
        if (!req.user.id) {
            return res.status(401).json({ message: 'not authorized' });
        } else if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'not enough rights' });
        }
        return next();
    },

    checkToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            req.user = null;
            return next();
        }

        jwt.verify(token, config.get('JWT_SECRET'), (err, user) => {
            if (err) {
                console.log(err);
                req.user = null;
            } else {
                req.user = user
            }
            next(err);
        })
    },

    renderReactApp(req, res, next) {
        return res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    },

    mongooseErrorHandler(error, req, res, next) {
        try {
            if(error.name === 'ValidationError') {
                const errors = {};
                Object.values(error.errors).forEach(({ path, message }) => {
                    errors[path] = message;
                });
                return res.status(400).json(errors);
            }
            if(error.code && error.code === 11000) {
                return res.status(400).json({ login: 'Пользователь уже существует.' });
            }
            return res.status(500).json({ message: error.message });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}