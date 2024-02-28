//Função do end point feito para alterar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucAlterar
  const AlterarUsuario = require('../controllers/ucAlterarUsuario');

  //Endpoint
  app.route('/alterarusuario').put(AlterarUsuario.alterar_usuario);
};
