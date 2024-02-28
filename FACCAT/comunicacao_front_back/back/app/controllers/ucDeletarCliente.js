//Conexão com o modelo Usuario
const Cliente = require('../models/Cliente') //Modelo Usuario

//Deletar cliente
exports.deletar_cliente = (req, res) => {
  //Utilizando o email para validar o delete
  const _email = req.body.email
  const valueDeleted = 1

  Cliente.update({ status_sys: valueDeleted }, {
    where: {
      email: _email,
    },
  }).then(clientes => {
    //console.log(users[0])
    if (clientes[0] === 1) { //Se === 1, o valor de status_syz é alterado para 1(deletado logicamente)
      //console.log('Deletado com sucesso')
      res.send({ msg: 'Cliente Deletado com sucesso!', deletado: 1 })
    } else {  //Se === 0, o email é inválido e não é possível deletar algo que não existe
      //console.log('Erro ao deletar')
      res.send({ msg: 'Não foi possível Deletar o Cliente!', deletado: 0 })
    }
  })
}