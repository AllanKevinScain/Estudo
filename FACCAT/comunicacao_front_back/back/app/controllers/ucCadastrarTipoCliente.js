//Conexão com o modelo Tipo Cliente
const TipoCliente = require('../models/TipoCliente');

//Cadastrar Tipo CLiente
exports.cadastrar_tipocliente = (req, res) => {
  //Cadastrar Tipo Cliente
  TipoCliente.create(req.body).then(users => {
    console.log(users);
    if (users === null) {
      //console.log('Erro')
      res.send({ msg: 'Erro ao cadastrar tipo de Cliente', cadastrado: 0 });
    } else {
      res.send({ msg: 'Tipo de Cliente Cadastrado', cadastrado: 1 });
      //console.log('Cadastrado')
    };
  });
};