const ValidationError = (message) => {
  const customError = new Error(message);
  customError.statusCode = 400;
  throw customError;
};

module.exports = ValidationError;
