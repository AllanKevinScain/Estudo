//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario')

//Cadastrar Usuário
exports.cadastrar_usuarios = (req, res) => {

  //Cadastrar usuário
  Usuario.create(req.body).then(users => {
    if (users === null) {
      //console.log('Erro')
      res.send({ msg: 'Erro ao cadastrar Usuário', cadastrado: 0 })
    } else {
      res.send({ msg: 'Usuário Cadastrado', cadastrado: 1 })
      //console.log('Cadastrado')
    }
  })
};
