const ResourceNotFoundError = (message) => {
  const customError = new Error(message);
  customError.statusCode = 400;
  throw customError;
};

module.exports = ResourceNotFoundError;
