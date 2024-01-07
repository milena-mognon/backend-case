const { Router } = require('express');
const LoginController = require('../controllers/session/LoginController');

const sessionRoutes = new Router();

sessionRoutes.post('/login', LoginController().create);

module.exports = sessionRoutes;
