const FindUserByIdUseCase = async (repository, { user_id }) => {
  const user = await repository().findById(user_id);

  if (!user) {
    throw new Error('user not found');
  }

  return user;
};

module.exports = FindUserByIdUseCase;
