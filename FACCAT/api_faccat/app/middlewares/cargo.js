const { lerPor } = require('../repositories/cargoRepository');

// Verifica se o cargo já existe
exports.validarCargo = async (req, res, next) => {
  const { descrição: descricao } = req.body;

  try {
    if (!descricao) {
      return res.status(400).json({ msg: 'A descrição deve ser informada' });
    }

    //Procura o Tipo Cliente no banco de dados
    const cargo = await lerPor(
      {
        descrição: descricao,
      },
      ['descrição']
    );

    //Se cargo == null o Tipo existe nao existe, o pipeline continua
    if (!cargo) {
      return next();
    }

    return res.status(400).json({ msg: 'Esse cargo ja está cadastrado!' });
  } catch (ex) {
    return res.status(500).json({ msg: 'Erro inesperado' });
  }
};
