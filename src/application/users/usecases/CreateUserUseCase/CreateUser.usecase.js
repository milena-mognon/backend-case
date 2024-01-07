const { hash } = require('bcryptjs');
const newUser = require('../../../../domain/users/User');
const ValidationError = require('../../../../domain/shared/errors/ValidationError');

const CreateUserUseCase = async (repository, { name, email, password }) => {
  const hashedPassword = await hash(password, 10);

  const existUser = await repository().findByEmail(email);

  if (existUser) {
    ValidationError('email already used');
  }

  const user = newUser({ name, email, hashedPassword });

  const createdUser = await repository().create(user);

  return createdUser;
};

module.exports = CreateUserUseCase;
