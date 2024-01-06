const { randomUUID } = require('node:crypto');

/** Mock do repositório de documentos para utilizar na execução de testes */
const FakeDocumentRepository = () => {
  const documents = [];

  const create = (document) => {
    const id = randomUUID();
    documents.push({
      title: document.title,
      description: document.description,
      keywords: document.keywords,
      id,
    });

    return documents.find((doc) => (doc.id = id));
  };
  const findById = (id) => {};
  const find = (id) => {};
  const save = (id) => {};
  const remove = (id) => {};
  return { create, findById, find, save, remove };
};

module.exports = FakeDocumentRepository;
