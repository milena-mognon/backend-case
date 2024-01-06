const newDocument = require('../../../../domain/documents/entities/Document');

const CreateDocumentUseCase = async (
  repository,
  { title, description, owner_id, keywords },
) => {
  const document = newDocument({
    title,
    description,
    owner_id,
    keywords,
  });

  const createdDocument = await repository().create(document);

  return createdDocument;
};
module.exports = CreateDocumentUseCase;
