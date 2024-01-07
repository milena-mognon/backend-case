const ResourceNotFoundError = require('../../../../domain/shared/errors/ResourceNotFoundError');

const FindDocumentByIdUseCase = async (repository, { document_id }) => {
  const document = await repository().findById(document_id);

  if (!document) {
    ResourceNotFoundError('Document not found');
  }

  return document;
};

module.exports = FindDocumentByIdUseCase;
