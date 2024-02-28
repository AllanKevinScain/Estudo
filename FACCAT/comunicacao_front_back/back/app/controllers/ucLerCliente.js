//Conexão com o modelo Cliente
const Cliente = require('../models/Cliente') //Modelo Usuario

//Ler cliente
exports.ler_cliente = (req, res) => {
  //Utilizando o email para achar o usuario
  const _email = req.body.email

  Cliente.findOne({
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