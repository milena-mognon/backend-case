const newUser = require('./User');

describe('User Entity - Unit Test', () => {
  it('should create a new user', () => {
    const document = newUser({
      name: 'Milena Mognon',
      email: 'milena@mail.com',
      hashedPassword: '123456',
    });
    expect(document.name).toBe('Milena Mognon');
    expect(document.email).toBe('milena@mail.com');
    expect(document.password).toBe('123456');
  });
});
