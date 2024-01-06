const newDocument = require('../../../../domain/documents/entities/Document');
const createDocument = require('../../../../infrastructure/data/mongoose/repositories/DocumentsRepository');

const CreateDocumentUseCase = async ({
  title,
  description,
  owner_id,
  keywords,
}) => {
  const document = newDocument({
    title,
    description,
    owner_id,
    keywords,
  });

  const createdDocument = await createDocument(document);

  return createdDocument;
};
module.exports = CreateDocumentUseCase;
