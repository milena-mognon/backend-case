const UserModel = require('../../schema/users/UserSchema');

/** Precisa implementar as funções presentes na interface UserRepositoryInterface */
const UsersRepository = () => {
  const create = async (user) => {
    const newUser = await UserModel.create({
      ...user,
    });

    return {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    };
  };

  const findByEmail = async (email) => {
    const user = await UserModel.findOne({ email });
    return user
      ? {
          id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
        }
      : undefined;
  };

  const findById = async (id) => {
    return await UserModel.exists({ _id: id });
  };

  return {
    create,
    findByEmail,
    findById,
  };
};

module.exports = UsersRepository;
