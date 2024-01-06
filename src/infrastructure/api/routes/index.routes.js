const { Router } = require('express');
const documentsRoutes = require('./documents.routes');

const routes = new Router();

routes.use('/documents', documentsRoutes);

module.exports = routes;
