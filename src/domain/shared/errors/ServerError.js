const ServerError = (message) => {
  const customError = new Error(message);
  customError.statusCode = 500;
  throw customError;
};

module.exports = ServerError;
