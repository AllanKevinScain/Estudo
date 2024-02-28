const { lerPor } = require('../repositories/tipoClienteRepository');

// Verifica se o tipo cliente já existe
exports.validarTipoCliente = async (req, res, next) => {
  const { descrição: descricao } = req.body;

  try {
    if (!descricao) {
      return res.status(400).json({ msg: 'A descrição deve ser informada' });
    }

    //Procura o Tipo Cliente no banco de dados
    const tipoCliente = await lerPor(
      {
        descrição: descricao,
      },
      ['descrição']
    );

    //Se tipoCliente == null o Tipo existe nao existe, o pipeline continua
    if (!tipoCliente) {
      return next();
    }

    return res
      .status(400)
      .json({ msg: 'Esse tipo de cliente ja está cadastrado!' });
  } catch (ex) {
    return res.status(500).json({ msg: 'Erro inesperado' });
  }
};
