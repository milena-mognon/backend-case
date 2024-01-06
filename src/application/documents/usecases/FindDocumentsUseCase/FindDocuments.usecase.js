const FindDocumentsUseCase = async (repository) => {
  const documents = await repository().find();

  return documents;
};

module.exports = FindDocumentsUseCase;
