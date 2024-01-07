const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const NotAuthorizedError = require('../../domain/shared/errors/NotAuthorizedError');

const AuthenticateUseCase = async (repository, { email, password }) => {
  const user = await repository().findByEmail(email);

  if (!user) {
    NotAuthorizedError('Not Authorized');
  }

  const hashedPassword = await compare(password, user.password);

  if (!hashedPassword) {
    NotAuthorizedError('Not Authorized');
  }

  const token = sign(
    {
      id: user.id,
      name: user.name,
      email: email,
    },
    Buffer.from(process.env.JWT_PRIVATE_KEY, 'base64'),
    {
      algorithm: 'RS256',
      expiresIn: '1d',
    },
  );
  return token;
};

module.exports = AuthenticateUseCase;
