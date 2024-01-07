const FindMyDocumentsUseCase = async (repository, { owner_id }) => {
  const documents = await repository().findByOwnerId(owner_id);

  return documents;
};

module.exports = FindMyDocumentsUseCase;
