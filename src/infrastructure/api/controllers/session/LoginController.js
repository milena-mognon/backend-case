const AuthenticateUseCase = require('../../../../application/session/Authenticate.usecase');
const UsersRepository = require('../../../data/mongoose/repositories/users/UsersRepository');

const LoginController = () => {
  const create = async (request, response) => {
    const data = request.body;

    const userRepository = UsersRepository;

    /** Repositório injetado como dependência - evita acoplamento */
    const token = await AuthenticateUseCase(userRepository, {
      email: data.email,
      password: data.password,
    });

    return response.json(token);
  };

  return {
    create,
  };
};

module.exports = LoginController;
