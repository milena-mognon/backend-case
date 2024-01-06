const { Router } = require('express');
const DocumentsController = require('../controllers/documents/DocumentsController');

const documentsRoutes = new Router();

documentsRoutes.post('/', DocumentsController().create);
documentsRoutes.get('/:id', DocumentsController().findById);
documentsRoutes.get('/', DocumentsController().find);

module.exports = documentsRoutes;
