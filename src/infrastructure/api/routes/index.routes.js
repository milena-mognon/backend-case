const { Router } = require('express');
const documentsRoutes = require('./documents.routes');
const usersRoutes = require('./users.routes');
const sessionRoutes = require('./session.routes');
const EnsureAuthentication = require('../middleware/EnsureAuthentication');

const routes = new Router();

routes.use('/documents', EnsureAuthentication, documentsRoutes);
routes.use('/users', EnsureAuthentication, usersRoutes);
routes.use('/session', sessionRoutes);

module.exports = routes;
