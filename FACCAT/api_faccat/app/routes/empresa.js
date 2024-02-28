// configurando dotenv
require('dotenv').config();

const rotas = require('express').Router();

// Controllers
const empresaController = require('../controllers/EmpresaController');

// Middlewares
const { validarEmpresa } = require('../middlewares/empresa');
const { carregarArquivos } = require('../middlewares/arquivo');

const empresaBannersPath = process.env.EMPRESA_BANNERS_PATH;

// Rotas
rotas.post(
  '/empresa',
  carregarArquivos('banners', `./${empresaBannersPath}`),
  validarEmpresa,
  empresaController.cadastrar
);

rotas.get('/empresa', empresaController.lerTodos);
rotas.get('/empresa/:id', empresaController.ler);

rotas.put(
  '/empresa/:id',
  carregarArquivos('banners', `./${empresaBannersPath}`),
  validarEmpresa,
  empresaController.alterar
);

rotas.delete('/empresa/:id', empresaController.deletar);

module.exports = rotas;
