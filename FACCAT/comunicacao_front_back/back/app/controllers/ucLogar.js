//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario') //Modelo Usuario

//Login
exports.login_usuarios = (req, res) => {
  //Dados de login informados pelo usuário
  const _email = req.body.email
  const _senha = req.body.senha

  //Verificando se os dados informados estão no banco
  Usuario.findOne({
    where: {
      email: _email,
      senha: _senha,
      status_sys: 0
    },
    atributes: ['email', 'senha']
  }).then(users => {
    if (users === null) { //Se verdadeiro, os dados não se encontram no banco (login inválido)
      //console.log('Login inválido!')
      res.send({ msg: 'Login inválido!', logado: 0 })
    } else { //Caso contrário, login bem sucedido
      //console.log('login bem sucedido')
      res.send({ msg: 'login bem sucedido!', logado: 1 })
    }
  })
}
