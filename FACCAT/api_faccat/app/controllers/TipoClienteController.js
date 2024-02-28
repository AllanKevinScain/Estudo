const {
  cadastrarTipocliente,
  lerTodosTipoClientes,
} = require('../repositories/tipoClienteRepository');

class TipoClienteController {
  lerTodos = async (req, res) => {
    try {
      const tipoClientes = await lerTodosTipoClientes();

      if (!tipoClientes) {
        return res.status(500).json({ msg: 'Algo deu errado!' });
      }

      return res.status(200).json(tipoClientes);
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao ler o tipoCliente' });
    }
  };

  cadastrar = async (req, res) => {
    try {
      const tipoCliente = await cadastrarTipocliente(req.body);

      if (!tipoCliente) {
        return res.status(400).json({ msg: 'Algo deu errado!', cadastrado: 0 });
      }

      return res
        .status(201)
        .json({ msg: 'Tipo cliente cadastrado', cadastrado: 1 });
    } catch (error) {
      return res.status(500).json({
        msg: 'Ocorreu um erro ao cadastrar um tipoCliente',
        cadastrado: 0,
      });
    }
  };
}

module.exports = new TipoClienteController();
