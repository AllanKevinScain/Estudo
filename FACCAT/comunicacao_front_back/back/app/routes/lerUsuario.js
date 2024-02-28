module.exports = function (app) {

  //Constante que busca o arquivo ucLerCliente
  const LerUsuario = require('../controllers/ucLerUsuario');

  //endpoint
  app.route('/lerusuario').get(LerUsuario.ler_usuario)
};
