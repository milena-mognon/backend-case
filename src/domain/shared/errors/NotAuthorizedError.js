const NotAuthorizedError = (message) => {
  const customError = new Error(message);
  customError.statusCode = 401;
  throw customError;
};

module.exports = NotAuthorizedError;
