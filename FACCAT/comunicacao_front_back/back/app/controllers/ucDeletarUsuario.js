//Conexão com o modelo Usuario
const Usuario = require('../models/Usuario') //Modelo Usuario

//Deletar usuário
exports.deletar_usuario = (req, res) => {
  //Utilizando o email para validar o delete
  const _email = req.body.email
  const valueDeleted = 1

  Usuario.update({ status_sys: valueDeleted }, {
    where: {
      email: _email,
    },
  }).then(users => {
    //console.log(users[0])
    if (users[0] === 1) { //Se === 1, o valor de status_syz é alterado para 1(deletado logicamente)
      //console.log('Deletado com sucesso')
      res.send({ msg: 'Usuário Deletado com sucesso!', deletado: 1 })
    } else {  //Se === 0, o email é inválido e não é possível deletar algo que não existe
      //console.log('Erro ao deletar')
      res.send({ msg: 'Não foi possível Deletar o Usuário!', deletado: 0 })
    }
  })
}
