//Função do end point feito para cadastrar Tipo Cliente
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucCadastrarTipoCliente
  const TipoClienteCadastrar = require('../controllers/ucCadastrarTipoCliente');

  //constante middlewares
  const middleware = require('../middlewares/verificarTipoCliente');

  //Endpoint
  app.route('/cadastrartipocliente').post(middleware, TipoClienteCadastrar.cadastrar_tipocliente);
};