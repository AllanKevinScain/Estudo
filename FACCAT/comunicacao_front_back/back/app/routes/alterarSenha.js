//Função do end point feito para alterar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucAlterar
  const AlterarSenha = require('../controllers/ucAlterarSenha');

  //Endpoint
  app.route('/alterarsenha').put(AlterarSenha.alterar_senha);
};
