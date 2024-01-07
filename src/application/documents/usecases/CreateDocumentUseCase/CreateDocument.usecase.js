const newDocument = require('../../../../domain/documents/entities/Document');
const StorageProvider = require('../../../../infrastructure/provider/StorageProvider');

const CreateDocumentUseCase = async (
  repository,
  { title, description, keywords },
  files,
) => {
  const document = newDocument({
    title,
    description,
    keywords,
  });

  if (files) {
    files.forEach((file) => {
      StorageProvider().saveFile(file.filename);
    });
  }

  const createdDocument = await repository().create(document);

  return createdDocument;
};
module.exports = CreateDocumentUseCase;
