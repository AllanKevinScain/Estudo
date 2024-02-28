//Função verify criada para validar o Cargo
const verificarCargo = (req, res, next) => {
  //constantes internas
  const Cargo = require('../models/Cargo');
  const _descricao = req.body.descrição;

  //Procura o Cargo no banco de dados
  Cargo.findOne({
    where: {
      descrição: _descricao,
    },
    atributes: ['descrição']
  }).then(users => {
    if (users === null) { //Se users = null o cargo nao existe, o pipeline continua
      next();
    } else { //Se users != null o cargo existe, para o pipeline
      res.send({ msg: 'Esse cargo ja existe!' });
    }
  });
};

module.exports = verificarCargo; //Export da função