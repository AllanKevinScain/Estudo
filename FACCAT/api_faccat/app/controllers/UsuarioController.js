const {
  cadastrarUsuario,
  deletarUsuario,
  lerUsuario,
  lerUsuarios,
  alterarPor,
} = require('../repositories/usuarioRepository');

const path = require('path');
const deletarArquivos = require('../utils/deletarArquivos');
class UsuarioController {
  cadastrar = async (req, res) => {
    try {
      const avatar = req.files.map((avatar) => ({
        titulo: avatar.newName,
        formato: avatar.format,
        titulo_original: avatar.originalname,
      }));

      const usuario = await cadastrarUsuario(req.body, avatar);

      if (!usuario) {
        return res
          .status(400)
          .json({ msg: 'Erro ao cadastrar Usuário', cadastrado: 0 });
      }

      return res.status(201).json({ msg: 'Usuário Cadastrado', cadastrado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao cadastrar o usuário', cadastrado: 0 });
    }
  };

  ler = async (req, res) => {
    const { idusuario: id } = req.query;

    try {
      const usuario = await lerUsuario(id);

      if (!usuario) {
        return res.status(400).json({ msg: 'Algo deu errado!' });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ msg: 'Ocorreu um erro ao ler o usuário' });
    }
  };

  lerTodos = async (req, res) => {
    try {
      const usuarios = await lerUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json({ msg: 'Ocorreu ao ler todos os usuários' });
    }
  };

  alterar = async (req, res) => {
    const { idusuario: id } = req.body;

    try {
      const usuario = await lerUsuario(id);
      const usuarioAtualizado = await usuario.update(req.body);

      if (!usuarioAtualizado) {
        return res
          .status(400)
          .json({ msg: 'Falha ao atualizar o usuário', alterado: 0 });
      }

      let avatarAtualizado = null;
      if (req.files[0]) {
        const avatarAnterior = `${usuario.avatar.titulo}.${usuario.avatar.formato}`;

        avatarAtualizado = await usuario.avatar.update({
          titulo: req.files[0].newName,
          formato: req.files[0].format,
          titulo_original: req.files[0].originalname,
        });

        // Remove o avatar antigo do servidor
        if (avatarAtualizado) {
          deletarArquivos([
            path.join(process.env.USUARIO_AVATAR_PATH, avatarAnterior),
          ]);
        }
      }

      if (!avatarAtualizado && req.files[0]) {
        return res
          .status(400)
          .json({ msg: 'Falha ao atualizar o avatar do usuário', alterado: 1 });
      }

      return res.status(200).json({ msg: 'Alterado com Sucesso', alterado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao alterar o usuário' });
    }
  };

  alterarSenha = async (req, res) => {
    const { email, senha } = req.body;

    try {
      const usuario = await alterarPor(
        { senha },
        {
          email,
          status_sys: 0,
        }
      );

      if (usuario[0] === 0) {
        //Se senha igual undefined OU user igual null => errado
        return res.status(400).json({ msg: 'Algo está errado', alterado: 0 });
      }

      return res.status(200).json({ msg: 'Alterado com Sucesso', alterado: 1 });
    } catch (ex) {
      return res
        .status(500)
        .json({ msg: 'Erro ao alterar senha', alterado: 0 });
    }
  };

  deletar = async (req, res) => {
    const { idusuario: id } = req.body;

    try {
      const usuario = await deletarUsuario(id);

      if (usuario[0] === 1) {
        return res
          .status(200)
          .json({ msg: 'Usuário Deletado com sucesso!', deletado: 1 });
      }

      return res.status(400).json({
        msg: 'Não foi possível Deletar o Usuário!',
        deletado: 0,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao apagar o usuário.' });
    }
  };
}

module.exports = new UsuarioController();
