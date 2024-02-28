//Função do end point feito para logar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucLogar
  const UsuarioLogar = require('../controllers/ucLogar')

  //Endpoint
  app.route('/logarusuario').post(UsuarioLogar.login_usuarios)
}

