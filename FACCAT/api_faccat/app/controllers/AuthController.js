const jwt = require('jsonwebtoken');

const { lerPor } = require('../repositories/usuarioRepository');

class AuthController {
  login = async (req, res) => {
    const { email, senha } = req.body;

    try {
      const usuario = await lerPor(
        {
          email,
          status_sys: 0,
        },
        ['email', 'senha']
      );

      if (!usuario) {
        return res.status(400).json({ msg: 'Login inválido!', logado: 0 });
      }

      const senhaValida = await usuario.validarSenha(senha);

      if (!senhaValida) {
        return res.status(401).json({ msg: 'Senha invalida!', logado: 0 });
      }

      // Gerando o token
      const expiracao = process.env.JWT_EXPIRACAO || '7d';
      const chave = process.env.JWT_CHAVE || '1e42e98121832e0f20af2a826931ff';

      const usuarioToken = {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        permissoes: usuario.permissoes,
      };

      let token = jwt.sign(usuarioToken, chave, {
        expiresIn: expiracao,
      });

      token = `Bearer ${token}`;

      return res
        .status(200)
        .json({ msg: 'login bem sucedido!', logado: 1, token });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Ocorreu um erro ao realizar o login.' });
    }
  };
}

module.exports = new AuthController();
