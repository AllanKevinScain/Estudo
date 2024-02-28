const jwt = require('jsonwebtoken');

// Validar token
exports.validarToken = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const [_, token] = authorization.split(' ');
    const chave = process.env.JWT_CHAVE || '1e42e98121832e0f20af2a826931ff';

    jwt.verify(token, chave, function (err, decoded) {
      if (err) {
        return res.status(401).json({ auth: false, message: 'Token invalido' });
      }

      req.usuarioId = decoded.id;
      return next();
    });
  } catch (ex) {
    return res.status(401).json({ auth: false, msg: 'Token invalido.' });
  }
};
