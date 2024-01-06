const CreateDocumentUseCase = require('../../../../application/documents/usecases/CreateDocumentUseCase/CreateDocument.usecase');
const DocumentModel = require('../../../data/mongoose/schema/documents/DocumentSchema');

const createDocument = async (request, response) => {
  const data = request.body;

  const document = await CreateDocumentUseCase(data);

  return response.json(document);
};

module.exports = createDocument;
