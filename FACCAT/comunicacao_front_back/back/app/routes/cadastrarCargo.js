//Função do end point feito para cadastrar cargo
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucCadastrarCargo
  const CargoCadastrar = require('../controllers/ucCadastrarCargo');

  //constante middlewares
  const middleware = require('../middlewares/verificarCargo');

  //Endpoint
  app.route('/cadastrarcargo').post(middleware, CargoCadastrar.cadastrar_cargo);
};