const CreateUserUseCase = require('../../../../application/users/usecases/CreateUserUseCase/CreateUser.usecase');
const UsersRepository = require('../../../data/mongoose/repositories/users/UsersRepository');

const UsersController = () => {
  const create = async (request, response) => {
    const data = request.body;

    const userRepository = UsersRepository;

    /** Repositório injetado como dependência - evita acoplamento */
    const user = await CreateUserUseCase(userRepository, data);

    return response.json(user);
  };

  return {
    create,
  };
};

module.exports = UsersController;
