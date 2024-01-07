const { verify } = require('jsonwebtoken');

const EnsureAuthentication = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send('JWT token is missing');
  }

  // Tira o Bearer
  const [, token] = authHeader.split(' ');

  try {
    // a chave public e chave privada estão no .env em base64
    const public_key = Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64');

    const decoded = verify(token, public_key);

    const { id, email, name } = decoded;

    request.user = {
      id,
      email,
      name,
    };

    return next();
  } catch (err) {
    return response.status(401).send('Unauthorized Access');
  }
};

module.exports = EnsureAuthentication;
