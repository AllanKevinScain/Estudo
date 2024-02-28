const {
  cadastrarCargo,
  lerCargos,
} = require('../repositories/cargoRepository');

class CargoController {
  cadastrar = async (req, res) => {
    try {
      const cargo = await cadastrarCargo(req.body);

      if (!cargo) {
        return res
          .status(400)
          .json({ msg: 'Erro ao cadastrar Cargo', cadastrado: 0 });
      }

      return res.status(201).json({ msg: 'Cargo Cadastrado', cadastrado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({
          error: 'Ocorreu um erro ao cadastrar um cargo',
          cadastrado: 0,
        });
    }
  };

  lerTodos = async (req, res) => {
    try {
      const cargos = await lerCargos();
      return res.status(200).json(cargos);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Ocorreu um erro ao ler todos os cargos' });
    }
  };
}

module.exports = new CargoController();
