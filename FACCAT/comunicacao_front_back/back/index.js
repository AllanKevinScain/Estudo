//Constantes
const express = require('express') //Chamando o express
const app = express() //Instânciando
const portServer = process.env.PORT || 5000; //Porta
const bodyParser = require('body-parser') //Importando body-parser
const cors = require('cors');

//Configurações
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

//End points
const cadastrarUsuario = require('./app/routes/cadastrarUsuario')(app) //cadastro de usuário
const cadastrarCliente = require('./app/routes/cadastrarCliente')(app) //cadastro de cliente
const alterarSenha = require('./app/routes/alterarSenha')(app) //alteração na senha do usuário
const alterarUsuario = require('./app/routes/alterarUsuario')(app) // alteração dados do usuário
const alterarCliente = require('./app/routes/alterarCliente')(app) // alteração dados do cliente
const logar = require('./app/routes/logar')(app) //login de usuários
const deletarUsuario = require('./app/routes/deletarUsuario')(app) //deletar usuário
const deletarCliente = require('./app/routes/deletarCliente')(app) //deletar cliente
const lerUsuario = require('./app/routes/lerUsuario')(app) // ler usuário
const lerCliente = require('./app/routes/lerCliente')(app) // ler cliente
const cadastrarCargo = require('./app/routes/cadastrarCargo')(app) //cadastro de cargo
const cadastrarTipoCliente = require('./app/routes/cadastrarTipoCliente')(app) //cadastro Tipo Cliente

const lerTodosClientes = require('./app/routes/lerTodosClientes')(app)


const Cliente = require('./app/models/Cliente');
//Rota padrão
app.get('/', async (req, res) => {
  const { data } = await Cliente.findAll({
    where: {
      status_sys: 0
    },
    attributes: ['nome', 'titulo', 'nacionalidade', 'createdAt', 'tipocliente_idtipocliente'],
  }).then((user) => {
    res.json(user);
  })
  return res.send(data);
})

/* Cliente.findAll({
  where: {
    status_sys: 0
  }
}).then((user) => {
  res.json(user);
})
const { data } = await (user);
return res.json(data); */

//Rodando o servidor na porta 5000
app.listen(portServer, () => console.log(`Sever Listening on port ${portServer}`));


