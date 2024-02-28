module.exports = function (app) {

  //Constante que busca o arquivo ucLerCliente
  const LerCliente = require('../controllers/ucLerCliente');

  //endpoint
  app.route('/lercliente').get(LerCliente.ler_cliente)
};
