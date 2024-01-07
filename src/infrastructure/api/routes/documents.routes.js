const { Router } = require('express');
const DocumentsController = require('../controllers/documents/DocumentsController');
const multer = require('multer');
const uploadConfig = require('../../provider/StorageProvider/config/MulterUploadConfig');

const documentsRoutes = new Router();

const upload = multer(uploadConfig.multer);

documentsRoutes.post(
  '/',
  upload.fields([{ name: 'files' }]),
  DocumentsController().create,
);

documentsRoutes.get('/my', DocumentsController().findByOwnerId);
documentsRoutes.get('/:id', DocumentsController().findById);
documentsRoutes.get('/', DocumentsController().find);

module.exports = documentsRoutes;
