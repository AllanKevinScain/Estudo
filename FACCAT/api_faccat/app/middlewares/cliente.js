const { lerPor } = require('../repositories/clienteRepository');

// Verifica se o e-mail já está em uso
exports.validarCliente = async (req, res, next) => {
  const { email } = req.body;
  const { idcliente: id } = req.query;

  try {
    if (!email) {
      return res.status(400).json({ msg: 'O e-mail deve ser informado!' });
    }

    // Procura o email no banco de dados
    const cliente = await lerPor(
      {
        email,
      },
      ['email']
    );

    //Se cliente === null o email nao existe, o pipeline continua
    if (!cliente) {
      return next();
    }

    // Editando o mesmo cliente, o email pode ser igual
    if (id == cliente.idcliente) {
      return next();
    }

    return res.status(400).json({ msg: 'Esse e-mail ja está em uso!' });
  } catch (ex) {
    return res.status(500).json({ msg: 'Erro inesperado' });
  }
};
