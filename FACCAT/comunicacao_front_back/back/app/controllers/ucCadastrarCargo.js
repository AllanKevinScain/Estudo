//Conexão com o modelo Cargo
const Cargo = require('../models/Cargo');

//Cadastrar Cargo
exports.cadastrar_cargo = (req, res) => {
  //Cadastrar Cargo
  Cargo.create(req.body).then(users => {
    console.log(users);
    if (users === null) {
      //console.log('Erro')
      res.send({ msg: 'Erro ao cadastrar Cargo', cadastrado: 0 });
    } else {
      res.send({ msg: 'Cargo Cadastrado', cadastrado: 1 });
      //console.log('Cadastrado')
    };
  });
};