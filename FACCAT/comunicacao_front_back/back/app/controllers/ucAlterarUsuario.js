//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario');

//Alterar usuário
exports.alterar_usuario = (req, res) => {
  //Constantes
  const _email = req.body.email;

  //Função que atualiza um user da tabela
  Usuario.update(req.body, {
    where: {
      email: _email,
      status_sys: 0
    },
  }).then(user => {
    if (user[0] === 0) { // user igual null => errado
      res.send({ msg: 'Algo está errado', alterado: 0 });
    } else { //Caso user != de null => certo
      res.send({ msg: 'Alterado com Sucesso', alterado: 1 });
    }
  });
};
