//Função do end point feito para deletar
module.exports = function (app) { //Exportar função

  //Constante que busca o arquivo ucDeletar
  const ClienteDeletar = require('../controllers/ucDeletarCliente')

  //Endpoint
  app.route('/deletarcliente').put(ClienteDeletar.deletar_cliente)
}

