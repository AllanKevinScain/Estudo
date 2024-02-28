module.exports = function (app) {

  //Constante que busca o arquivo ucLerCliente
  const LerTodosClientes = require('../controllers/ucLerTodosClientes');

  //endpoint
  app.route('/lertodosclientes').get(LerTodosClientes.ler_todos_clientes)
};