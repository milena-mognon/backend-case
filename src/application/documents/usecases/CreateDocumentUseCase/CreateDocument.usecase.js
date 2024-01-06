const newDocument = require('../../../../domain/documents/entities/Document');

const CreateDocumentUseCase = async (
  repository,
  { title, description, keywords },
) => {
  const document = newDocument({
    title,
    description,
    keywords,
  });

  const createdDocument = await repository().create(document);

  return createdDocument;
};
module.exports = CreateDocumentUseCase;
