module.exports = function (app) {

  //Constante que busca o arquivo ucCadastrarCliente
  const ClienteCadastrar = require('../controllers/ucCadastrarCliente');

  //andpoint
  app.route('/cadastrarcliente').post(ClienteCadastrar.cadastrar_cliente)
};
