const CreateDocumentUseCase = require('../../../../application/documents/usecases/CreateDocumentUseCase/CreateDocument.usecase');
const FindDocumentByIdUseCase = require('../../../../application/documents/usecases/FindDocumentByIdUseCase/FindDocumentById.usecase');
const FindDocumentsUseCase = require('../../../../application/documents/usecases/FindDocumentsUseCase/FindDocuments.usecase');
const DocumentsRepository = require('../../../data/mongoose/repositories/DocumentsRepository');

const DocumentsController = () => {
  const create = async (request, response) => {
    const data = request.body;

    const documentRepository = DocumentsRepository;

    /** Repositório injetado como dependência - evita acoplamento */
    const document = await CreateDocumentUseCase(documentRepository, data);

    return response.json(document);
  };

  const findById = async (request, response) => {
    const { id } = request.params;

    const documentRepository = DocumentsRepository;

    /** Repositório injetado como dependência - evita acoplamento */
    const document = await FindDocumentByIdUseCase(documentRepository, {
      document_id: id,
    });

    return response.json(document);
  };

  const find = async (request, response) => {
    const documentRepository = DocumentsRepository;
    /** Repositório injetado como dependência - evita acoplamento */
    const document = await FindDocumentsUseCase(documentRepository);

    return response.json(document);
  };

  return {
    create,
    findById,
    find,
  };
};

module.exports = DocumentsController;
