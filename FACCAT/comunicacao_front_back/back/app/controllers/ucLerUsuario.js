//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario') //Modelo Usuario

//Ler usuario
exports.ler_usuario = (req, res) => {
  //Utilizando o email para achar o usuario
  const _email = req.body.email

  Usuario.findOne({
    where: {
      email: _email,
      status_sys: 0
    },
  }).then(user => {
    //console.log(user)
    if (user === null) {
      //console.log('Algo deu errado!')
      res.send({ msg: 'Algo deu errado!' })
    } else {
      res.send({ dados: user })
    }
  })
}