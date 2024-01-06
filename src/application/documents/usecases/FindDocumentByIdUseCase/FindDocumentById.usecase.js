const FindDocumentByIdUseCase = async (repository, { document_id }) => {
  const document = await repository().findById(document_id);

  if (!document) {
    throw new Error('Document not found');
  }

  return document;
};

module.exports = FindDocumentByIdUseCase;
