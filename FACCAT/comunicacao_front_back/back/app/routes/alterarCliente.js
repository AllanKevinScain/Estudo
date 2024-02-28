//Função do end point feito para alterar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucAlterar
  const AlterarCliente = require('../controllers/ucAlterarCliente');

  //Endpoint
  app.route('/alterarcliente').put(AlterarCliente.alterar_cliente);
};
