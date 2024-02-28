const rotas = require('express').Router();

// Controllers
const cargoController = require('../controllers/CargoController');

// Middlewares
const { validarCargo } = require('../middlewares/cargo');

// Rotas
rotas.post('/cadastrarcargo', validarCargo, cargoController.cadastrar);
rotas.get('/lercargo', cargoController.lerTodos);

module.exports = rotas;
