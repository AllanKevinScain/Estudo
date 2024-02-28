//Conexão com o modelo Usuario
const Cliente = require('../models/Cliente');

//Cadastrar Cliente
exports.cadastrar_cliente = (req, res) => {

  Cliente.create(req.body).then(users => {
    if (users === null) {
      //console.log('Erro')
      res.send({ msg: 'Erro ao cadastrar CLiente', cadastrado: 0 })
    } else {
      res.send({ msg: 'Cliente Cadastrado', cadastrado: 1 })
      //console.log('Cadastrado')
    };
  });
};
