// Conexão com o modelo Usuario
const { Cliente } = require('../models');

// Cadastrar cliente
exports.cadastrarCliente = (cliente) => {
  return Cliente.create(cliente);
};

// Ler cliente
exports.lerCliente = (idCliente) => {
  return Cliente.findOne({
    where: {
      idcliente: idCliente,
      status_sys: 0,
    },
  });
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return Cliente.findOne({
    where,
    attributos,
  });
};

// Ler todos clientes
exports.lerTodosClientes = async () => {
  return Cliente.findAll({
    where: {
      status_sys: 0,
    },
  });
};

// Alterar cliente
exports.alterarCliente = (idCliente, cliente) => {
  return Cliente.update(cliente, {
    where: {
      idcliente: idCliente,
      status_sys: 0,
    },
  });
};

// Deletar cliente
exports.deletarCliente = (idCliente) => {
  const statusDeletado = 1;

  return Cliente.update(
    { status_sys: statusDeletado },
    {
      where: {
        idcliente: idCliente,
      },
    }
  );
};
