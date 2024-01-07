const ResourceNotFoundError = require('../../../../domain/shared/errors/ResourceNotFoundError');
const UsersRepository = require('../../../../infrastructure/data/mongoose/repositories/users/UsersRepository');

const FindUserByIdUseCase = async ({ user_id }) => {
  const user = await UsersRepository().findById(user_id);

  if (!user) {
    ResourceNotFoundError('user not found');
  }

  return user;
};

module.exports = FindUserByIdUseCase;
