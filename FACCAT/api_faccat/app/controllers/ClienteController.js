const {
  cadastrarCliente,
  lerCliente,
  lerTodosClientes,
  alterarCliente,
  deletarCliente,
} = require('../repositories/clienteRepository');

class ClienteController {
  ler = async (req, res) => {
    const { idcliente: id } = req.query;

    try {
      const cliente = await lerCliente(id);

      if (!cliente) {
        return res.status(400).json({ msg: 'Cliente invalido' });
      }

      return res.staus(200).json(cliente);
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao ler um cliente!' });
    }
  };

  lerTodos = async (req, res) => {
    try {
      const clientes = await lerTodosClientes();

      if (!clientes) {
        return res.status(500).json({ msg: 'Algo deu errado!' });
      }

      return res.status(200).json(clientes);
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao ler os clientes' });
    }
  };

  cadastrar = async (req, res) => {
    try {
      const cliente = await cadastrarCliente(req.body);

      if (!cliente) {
        return res
          .status(400)
          .json({ msg: 'Erro ao cadastrar Cliente', cadastrado: 0 });
      }

      return res.status(201).json({ msg: 'Cliente cadastrado', cadastrado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Erro ao cadastrar um cliente!', cadastrado: 0 });
    }
  };

  alterar = async (req, res) => {
    const { idcliente: id } = req.query;

    try {
      const cliente = await alterarCliente(id, req.body);

      if (cliente[0] === 0) {
        return res.status(400).json({ msg: 'Algo está errado', alterado: 0 });
      }

      return res
        .status(200)
        .json({ msg: 'Cliente alterado com Sucesso', alterado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao alterar o cliente', alterado: 0 });
    }
  };

  deletar = async (req, res) => {
    const { idcliente: id } = req.query;

    try {
      const cliente = await deletarCliente(id);
      if (cliente[0] === 1) {
        //Se === 1, o valor de status_syz é alterado para 1(deletado logicamente)
        //console.log('Deletado com sucesso')
        return res
          .status(200)
          .json({ msg: 'Cliente Deletado com sucesso!', deletado: 1 });
      }

      return res.status(400).json({
        msg: 'Não foi possível Deletar o Cliente!',
        deletado: 0,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao deletar o cliente!', deletado: 0 });
    }
  };
}

module.exports = new ClienteController();
