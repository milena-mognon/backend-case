const CreateDocumentUseCase = require('../../../../application/documents/usecases/CreateDocumentUseCase/CreateDocument.usecase');
const FindDocumentByIdUseCase = require('../../../../application/documents/usecases/FindDocumentByIdUseCase/FindDocumentById.usecase');
const FindDocumentsUseCase = require('../../../../application/documents/usecases/FindDocumentsUseCase/FindDocuments.usecase');
const FindMyDocumentsUseCase = require('../../../../application/documents/usecases/FindUserDocumentsUseCase/FindMyDocuments.usecase');
const FindUserByIdUseCase = require('../../../../application/users/usecases/FindUserById/FindUserById.usecase');
const DocumentsRepository = require('../../../data/mongoose/repositories/documents/DocumentsRepository');

const DocumentsController = () => {
  const create = async (request, response) => {
    const user = request.user;
    const data = request.body;
    const { files } = request.files;

    const documentRepository = DocumentsRepository;

    await FindUserByIdUseCase({ user_id: user.id });

    /** Repositório injetado como dependência - evita acoplamento */
    const document = await CreateDocumentUseCase(
      documentRepository,
      { ...data, owner_id: user.id },
      files,
    );

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

  const findByOwnerId = async (request, response) => {
    const user = request.user;

    const documentRepository = DocumentsRepository;
    /** Repositório injetado como dependência - evita acoplamento */
    const documents = await FindMyDocumentsUseCase(documentRepository, {
      owner_id: user.id,
    });

    return response.json(documents);
  };

  return {
    create,
    findById,
    find,
    findByOwnerId,
  };
};

module.exports = DocumentsController;
