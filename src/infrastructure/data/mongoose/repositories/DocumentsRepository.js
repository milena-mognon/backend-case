const DocumentModel = require('../schema/documents/DocumentSchema');

const createDocument = async (document) => {
  const newDocument = await DocumentModel.create({
    ...document,
  });

  return {
    title: newDocument.title,
    description: newDocument.description,
    keywords: newDocument.keywords,
    id: newDocument._id,
  };
};

module.exports = createDocument;
