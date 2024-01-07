const newDocument = require('../../../../domain/documents/entities/Document');
const StorageProvider = require('../../../../infrastructure/provider/StorageProvider');
const FindUserByIdUseCase = require('../../../users/usecases/FindUserById/FindUserById.usecase');

const CreateDocumentUseCase = async (
  repository,
  { title, description, keywords, owner_id },
  files,
) => {
  await FindUserByIdUseCase({ user_id: owner_id });

  const formattedDocument = {
    title,
    description,
    owner_id,
    keywords,
    related_files: [],
  };

  if (files) {
    files.forEach((file) => {
      StorageProvider().saveFile(file.filename);
      Object.assign(formattedDocument, {
        related_files: [
          ...formattedDocument.related_files,
          { filename: file.filename },
        ],
      });
    });
  }

  const document = newDocument(formattedDocument);

  const createdDocument = await repository().create(document);

  return createdDocument;
};

module.exports = CreateDocumentUseCase;
