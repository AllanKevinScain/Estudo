//Conexão com o modelo Usuario
const Cliente = require('../models/Cliente');

//Ler todos clientes

exports.ler_todos_clientes = (req, res) => {
  Cliente.findAll({
    where: {
      status_sys: 0
    }
  }).then((user) => {
    res.send({ msg: user })
  })
  //console.log(clientes)
  //res.send({ msg: clientes })
  //console.log({ msg: clientes })
}