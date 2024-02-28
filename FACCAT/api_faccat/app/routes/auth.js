const rotas = require('express').Router();

// Controllers
const authController = require('../controllers/AuthController');

// Rotas
rotas.post('/logarusuario', authController.login);

module.exports = rotas;
