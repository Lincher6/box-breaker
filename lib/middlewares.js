const path = require('path');

module.exports = {
    protectedRoute(req, res, next) {
        if (!req.cookies.userId) {
            return res.status(401).json({ message: 'not authorized' });
        }
        return next();
    },

    authRoute(req, res, next) {
        if (req.cookies.user) {
            return res.redirect('/game');
        }
        return next();
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
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }
}