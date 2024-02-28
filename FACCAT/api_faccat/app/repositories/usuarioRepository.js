//Conexão com o modelo Usuario
const { Usuario, UsuarioAvatar } = require('../models');

// Cadastrar usuário
exports.cadastrarUsuario = (usuario, avatar) => {
  return Usuario.create(
    {
      ...usuario,
      avatar,
    },
    {
      include: [
        {
          model: UsuarioAvatar,
          as: 'avatar',
        },
      ],
    }
  );
};

// Ler usuário
exports.lerUsuario = (id) => {
  return Usuario.findOne({
    where: {
      idusuario: id,
      status_sys: 0,
    },
    include: [
      {
        model: UsuarioAvatar,
        as: 'avatar',
      },
    ],
  });
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return Usuario.findOne({
    where,
    attributos,
  });
};

// Ler todos usuarios
exports.lerUsuarios = () => {
  return Usuario.findAll({
    where: {
      status_sys: 0,
    },
  });
};

// Alterar usuário
exports.alterarUsuario = (idUsuario, usuario) => {
  return Usuario.update(usuario, {
    where: {
      idusuario: idUsuario,
      status_sys: 0,
    },
  });
};

// AlterarPor
exports.alterarPor = (usuario, where) => {
  return Usuario.update(usuario, {
    where,
  });
};

// Deletar usuário
exports.deletarUsuario = (idUsuario) => {
  const statusDeletado = 1;

  return Usuario.update(
    { status_sys: statusDeletado },
    {
      where: {
        idusuario: idUsuario,
      },
    }
  );
};
