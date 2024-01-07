const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log do erro para debug (pode ser personalizado)

  // Verificar se é um erro personalizado com um código de status definido
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // Lidar com outros tipos de erros
  res.status(500).json({ error: 'Erro interno do servidor' });
};

module.exports = errorHandler;
