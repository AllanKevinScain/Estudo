//Função do end point feito para deletar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucDeletar
  const UsuarioDeletar = require('../controllers/ucDeletarUsuario')

  //Endpoint
  app.route('/deletarusuario').put(UsuarioDeletar.deletar_usuario)
}

