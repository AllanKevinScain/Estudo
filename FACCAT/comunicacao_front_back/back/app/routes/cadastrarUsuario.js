//Função do end point feito para cadastrar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucCadastrarUsuario
  const UsuarioCadastrar = require('../controllers/ucCadastrarUsuario')

  //constante middlewares
  const middleware = require('../middlewares/verificarEmail');

  //Endpoint
  app.route('/cadastrarusuario').post(middleware, UsuarioCadastrar.cadastrar_usuarios)
}

