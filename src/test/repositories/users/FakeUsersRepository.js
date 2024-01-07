const { hash } = require('bcryptjs');
const { randomUUID } = require('node:crypto');

/** Mock do repositório de users para utilizar na execução de testes */
const users = [];

const FakeUserRepository = () => {
  const create = async (user) => {
    const hashedPassword = await hash(user.password, 10);

    const id = user?.id ?? randomUUID();
    users.push({
      name: user.name,
      email: user.email,
      password: hashedPassword,
      id,
    });

    return users.find((doc) => doc.id === id);
  };

  const findByEmail = async (email) => {
    return await users.find((doc) => doc.email === email);
  };

  return { create, findByEmail };
};

module.exports = FakeUserRepository;
