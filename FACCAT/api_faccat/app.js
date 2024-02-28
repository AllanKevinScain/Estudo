const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const rotas = require('./app/routes');

const app = express();

// Configurações
require('dotenv').config();

app.use(cors());

app.use(bodyParser.json({ limit: '200mb', parameterLimit: 10000000000 }));
app.use(
  bodyParser.urlencoded({
    limit: '200mb',
    extended: true,
    parameterLimit: 10000000000,
  })
);

// Carregando as rotas da aplicação
app.use(...rotas);

// Arquivos estaticos -> Banners de empresas
const empresaBannersPath = process.env.EMPRESA_BANNERS_PATH;
const bannersRota = `/${empresaBannersPath}`;

app.use(bannersRota, express.static(path.join(__dirname, empresaBannersPath)));

// Arquivos estaticos -> Imagem de perfil de usuarios
const perfilUsuarioPath = process.env.USUARIO_AVATAR_PATH;
const perfilUsuarioRota = `/${perfilUsuarioPath}`;

app.use(
  perfilUsuarioRota,
  express.static(path.join(__dirname, perfilUsuarioPath))
);

module.exports = app;
