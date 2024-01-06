const DocumentModel = require('../schema/documents/DocumentSchema');

/** Precisa implementar as funções presentes na interface DocumentRepositoryInterface */
const DocumentsRepository = () => {
  const create = async (document) => {
    const newDocument = await DocumentModel.create({
      ...document,
    });

    return {
      id: newDocument._id,
      title: newDocument.title,
      description: newDocument.description,
      keywords: newDocument.keywords,
    };
  };

  return {
    create,
  };
};

module.exports = DocumentsRepository;
