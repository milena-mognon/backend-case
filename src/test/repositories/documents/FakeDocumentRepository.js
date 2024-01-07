const { randomUUID } = require('node:crypto');
const newDocument = require('../../../domain/documents/entities/Document');

/** Mock do repositório de documentos para utilizar na execução de testes */
const documents = [];

const FakeDocumentRepository = () => {
  const create = (document) => {
    const id = document?.id ?? randomUUID();
    documents.push(newDocument(document));

    return documents.find((doc) => doc.id === id);
  };

  const findById = async (id) => {
    return await documents.find((doc) => doc.id === id);
  };

  const find = () => {
    return documents;
  };

  const findByOwnerId = async (owner_id) => {
    return documents.filter((doc) => doc.owner_id === owner_id);
  };

  return { create, findById, find, findByOwnerId };
};

module.exports = FakeDocumentRepository;
