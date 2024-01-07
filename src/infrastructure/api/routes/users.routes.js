const { Router } = require('express');
const UsersController = require('../controllers/users/UsersController');

const usersRoutes = new Router();

usersRoutes.post('/', UsersController().create);

module.exports = usersRoutes;
