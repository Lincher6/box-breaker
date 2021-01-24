const { protectedRoute, adminRoute } = require("../lib/middlewares");
const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/user', protectedRoute, UserController.getUser);
router.patch('/user', protectedRoute, UserController.updateUser);
router.get('/users', adminRoute, UserController.getUsers);

router.post('/login', UserController.login);

router.post('/registration', UserController.createUser);

module.exports = router;