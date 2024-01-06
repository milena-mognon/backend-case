const { hash } = require('bcryptjs');
const newUser = require('../../../../domain/users/User');

const CreateUserUseCase = async ({ name, email, password }) => {
  const hashedPassword = await hash(password, 10);

  const user = newUser({
    name,
    email,
    hashedPassword: hashedPassword,
  });

  return user;
};
module.exports = CreateUserUseCase;
