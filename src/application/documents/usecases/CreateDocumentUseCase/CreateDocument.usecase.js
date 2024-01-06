const newDocument = require('../../../../domain/documents/entities/Document');

const CreateDocumentUseCase = ({ title, description, owner_id, keywords }) => {
  const document = newDocument({
    title,
    description,
    owner_id,
    keywords,
  });

  return document;
};
module.exports = CreateDocumentUseCase;
