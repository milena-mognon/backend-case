const { Router } = require('express');
const createDocument = require('../controllers/documents/DocumentsController');

const documentsRoutes = new Router();

documentsRoutes.post('/', createDocument);

module.exports = documentsRoutes;
