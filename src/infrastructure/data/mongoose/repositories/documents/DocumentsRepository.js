const DocumentModel = require('../../schema/documents/DocumentSchema');
const newDocument = require('../../../../../domain/documents/entities/Document');

/** Precisa implementar as funções presentes na interface DocumentRepositoryInterface */
const DocumentsRepository = () => {
  const create = async (document) => {
    const savedDocument = await DocumentModel.create({
      ...document,
    });

    return newDocument(savedDocument);
  };

  const findById = async (document_id) => {
    const document = await DocumentModel.findById(document_id);
    return document ? newDocument(document) : undefined;
  };

  const find = async () => {
    const documents = await DocumentModel.find();
    return documents.map((doc) => {
      return newDocument(doc);
    });
  };

  const findByOwnerId = async (owner_id) => {
    const documents = await DocumentModel.find({ owner_id });
    return documents.map((doc) => {
      return newDocument(doc);
    });
  };

  return {
    create,
    findById,
    find,
    findByOwnerId,
  };
};

module.exports = DocumentsRepository;
