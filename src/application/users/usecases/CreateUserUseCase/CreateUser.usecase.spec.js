const FakeUserRepository = require('../../../../test/repositories/users/FakeUsersRepository');
const CreateUserUseCase = require('./CreateUser.usecase');

describe('User Entity - Unit Test', () => {
  it('should create a new user', async () => {
    const user = await CreateUserUseCase(FakeUserRepository, {
      name: 'Milena Mognon',
      email: 'milena@mail.com',
      password: '123456',
    });

    expect(user.name).toBe('Milena Mognon');
    expect(user.email).toBe('milena@mail.com');
  });
});
