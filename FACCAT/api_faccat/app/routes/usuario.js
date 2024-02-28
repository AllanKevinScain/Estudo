const rotas = require('express').Router();

// Controllers
const usuarioController = require('../controllers/UsuarioController');

// Middlewares
const { validarUsuario } = require('../middlewares/usuario');

const { carregarArquivos } = require('../middlewares/arquivo');
const avatarsPath = process.env.USUARIO_AVATAR_PATH;

// Rotas
rotas.post(
  '/cadastrarusuario',
  carregarArquivos('avatar', `./${avatarsPath}`),
  validarUsuario,
  usuarioController.cadastrar
);

rotas.put(
  '/alterarusuario',
  carregarArquivos('avatar', `./${avatarsPath}`),
  validarUsuario,
  usuarioController.alterar
);

rotas.put('/alterarsenha', usuarioController.alterarSenha);
rotas.get('/lertodosusuarios', usuarioController.lerTodos);
rotas.get('/lerusuario', usuarioController.ler);
rotas.put('/deletarusuario', usuarioController.deletar);

module.exports = rotas;
