const UsersRepository = require('../../../../infrastructure/data/mongoose/repositories/users/UsersRepository');

const FindUserByIdUseCase = async ({ user_id }) => {
  const user = await UsersRepository().findById(user_id);

  if (!user) {
    throw new Error('user not found');
  }

  return user;
};

module.exports = FindUserByIdUseCase;
