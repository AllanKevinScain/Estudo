const { lerPor } = require('../repositories/usuarioRepository');

const deletarArquivos = require('../utils/deletarArquivos');

/**
 * É utilizada caso de erro na validação, responsavel para lançar o erro na
 * responsa e tambeḿ apagar os arquivos submetidos ao servidor
 */
class UsuarioRequestInvalida {
  constructor(request, response) {
    this.req = request;
    this.res = response;
  }

  manipular(status, json) {
    if (this.req.files) {
      deletarArquivos(this.req.files.map((f) => f.path));
    }

    return this.res.status(status).json(json);
  }
}

// verifica se o e-mail já está em uso
exports.validarUsuario = async (req, res, next) => {
  const { email, senha, idusuario } = req.body;

  try {
    const requestInvalida = new UsuarioRequestInvalida(req, res);

    if (!email) {
      return requestInvalida.manipular(400, {
        msg: 'O e-mail deve ser informado!',
      });
    }

    if (!senha) {
      return requestInvalida.manipular(400, {
        msg: 'A senha deve ser informada',
      });
    }

    if (senha.length < 3 || senha.length > 40) {
      return requestInvalida.manipular(400, {
        msg: 'A senha deve ter entre 3 e 40 caracteres',
      });
    }

    // Procura o email no banco de dados
    const usuario = await lerPor(
      {
        email,
      },
      ['email']
    );

    //Se usuario == null o email nao existe, o pipeline continua
    if (!usuario) {
      return next();
    }

    // Editando o mesmo usuário, o email pode ser igual
    if (idusuario == usuario.idusuario) {
      return next();
    }

    return requestInvalida.manipular(400, {
      msg: 'Esse e-mail ja está em uso!',
    });
  } catch (ex) {
    return requestInvalida.manipular(500, {
      msg: 'Erro inesperado',
    });
  }
};
