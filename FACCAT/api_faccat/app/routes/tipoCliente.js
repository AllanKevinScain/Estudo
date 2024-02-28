const rotas = require('express').Router();

// Controllers
const tipoClienteController = require('../controllers/TipoClienteController');

// Middlewares
const { validarTipoCliente } = require('../middlewares/tipoCliente');

// Rotas
rotas.get('/lertipocliente', tipoClienteController.lerTodos);
rotas.post(
  '/cadastrartipocliente',
  validarTipoCliente,
  tipoClienteController.cadastrar
);

module.exports = rotas;
