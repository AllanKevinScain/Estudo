//Função verify criada para validar o email
const verificarEmail = (req, res, next) => {
  //constantes internas
  const Usuario = require('../models/Usuario');
  const _email = req.body.email;
  //console.log(_email);

  //Procura o email no banco de dados
  Usuario.findOne({
    where: {
      email: _email,
    },
    atributes: ['email']
  }).then(users => {
    if (users === null) { //Se users = null o email nao existe, o pipeline continua
      next();
    } else { //Se users != null o email existe, para o pipeline
      res.send({ msg: 'Esse email ja está em uso!' });
    }
  });
};

module.exports = verificarEmail; //Export da função