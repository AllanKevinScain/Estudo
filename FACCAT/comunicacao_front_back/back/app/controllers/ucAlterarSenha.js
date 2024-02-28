//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario');

//Alterar Senha do Usuario
exports.alterar_senha = (req, res) => {
  //Constantes
  const _email = req.body.email;
  const _novaSenha = req.body.senha;

  console.log(_email);
  console.log(_novaSenha);

  //Função que atualiza um user da tabela
  Usuario.update({ senha: _novaSenha }, { //Senha irá ser atualizada na tabela
    where: {
      email: _email, //Este será o email que vai ter a senha alterada
      status_sys: 0
    },
  }).then(user => {
    console.log(user);
    if (user[0] === 0) { //Se senha igual undefined OU user igual null => errado
      res.send({ msg: 'Algo está errado', alterado: 0 });
    } else { //Caso senha != de undefined E user != de null => certo
      res.send({ msg: 'Alterado com Sucesso', alterado: 1 });
    }
  });
};
