const rotas = require('express').Router();

// rotas
const cargo = require('./cargo');
const cliente = require('./cliente');
const empresa = require('./empresa');
const auth = require('./auth');
const tipoCliente = require('./tipoCliente');
const usuario = require('./usuario');

//Rota padrão
rotas.get('/', (_, res) => res.send('<strong>API-FACCAT -> Home</strong/>'));

module.exports = [cargo, cliente, empresa, auth, tipoCliente, usuario, rotas];
