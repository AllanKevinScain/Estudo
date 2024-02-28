//Conexão com o modelo Usuario
const Cliente = require('../models/Cliente');

//Alterar usuário
exports.alterar_cliente = (req, res) => {
  //Constantes
  const _email = req.body.email;

  //Função que atualiza um user da tabela
  Cliente.update(req.body, {
    where: {
      email: _email,
      status_sys: 0
    },
  }).then(user => {
    //console.log(user)
    if (user[0] === 0) { // o email não existe no bd
      res.send({ msg: 'Algo está errado', alterado: 0 });
    } else {
      res.send({ msg: 'Alterado com Sucesso', alterado: 1 });
    }
  });
};
