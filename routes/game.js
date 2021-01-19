const { protectedRoute } = require("../lib/middlewares");
const ResultsController = require("../controllers/results.controller")
const { Router } = require('express');

const router = Router();

router.get('/results', protectedRoute, ResultsController.getResults);

router.post('/results', protectedRoute, ResultsController.saveResult);

module.exports = router;