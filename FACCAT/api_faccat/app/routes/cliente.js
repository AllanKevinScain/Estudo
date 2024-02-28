const rotas = require('express').Router();

// Controllers
const clienteController = require('../controllers/ClienteController');

// Middlewares
const { validarCliente } = require('../middlewares/cliente');

// Rotas
rotas.put('/alterarcliente', validarCliente, clienteController.alterar);
rotas.get('/lercliente', clienteController.ler);
rotas.get('/lertodosclientes', clienteController.lerTodos);
rotas.put('/deletarcliente', clienteController.deletar);
rotas.post('/cadastrarcliente', validarCliente, clienteController.cadastrar);

module.exports = rotas;
