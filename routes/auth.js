const { protectedRoute } = require("../lib/middlewares");
const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/user', protectedRoute, UserController.getUser);

router.post('/login', UserController.login);

router.post('/logout', (req, res) => {
    res.clearCookie('userId').redirect('/');
    res.status(200).json({ message: 'logged out successfully' })
})

router.post('/registration', UserController.createUser);

module.exports = router;