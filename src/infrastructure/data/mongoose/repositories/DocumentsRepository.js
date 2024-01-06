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

  const findById = async (document_id) => {
    const document = await DocumentModel.findById(document_id);
    return document
      ? {
          id: document._id,
          title: document.title,
          description: document.description,
          keywords: document.keywords,
        }
      : undefined;
  };

  const find = async () => {
    const documents = await DocumentModel.find();
    return documents.map((doc) => {
      return {
        id: doc._id,
        title: doc.title,
        description: doc.description,
        keywords: doc.keywords,
      };
    });
  };

  return {
    create,
    findById,
    find,
  };
};

module.exports = DocumentsRepository;
