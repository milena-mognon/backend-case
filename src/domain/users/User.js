const newUser = ({ name, email, hashedPassword }) => {
  return {
    name,
    email,
    password: hashedPassword,
  };
};

module.exports = newUser;
