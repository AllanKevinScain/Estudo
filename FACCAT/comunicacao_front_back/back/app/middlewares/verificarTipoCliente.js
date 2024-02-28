//Função verify criada para validar o Tipo Cliente
const verificarTipoCliente = (req, res, next) => {
  //constantes internas
  const TipoCliente = require('../models/TipoCliente');
  const _descricao = req.body.descrição;

  //Procura o Tipo Cliente no banco de dados
  TipoCliente.findOne({
    where: {
      descrição: _descricao,
    },
    atributes: ['descrição']
  }).then(users => {
    if (users === null) { //Se users = null o Tipo existe nao existe, o pipeline continua
      next();
    } else { //Se users != null o Tipo existe, para o pipeline
      res.send({ msg: 'Esse tipo de cliente ja está cadastrado!' });
    }
  });
};

module.exports = verificarTipoCliente; //Export da função