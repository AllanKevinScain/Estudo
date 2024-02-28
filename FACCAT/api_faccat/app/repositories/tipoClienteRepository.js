//Conexão com o modelo Tipo Cliente
const { TipoCliente } = require('../models');

// Cadastrar tipo cliente
exports.cadastrarTipocliente = (tipoCliente) => {
  return TipoCliente.create(tipoCliente);
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return TipoCliente.findOne({
    where,
    attributos,
  });
};

// Ler todos tipo clientes
exports.lerTodosTipoClientes = async () => {
  return TipoCliente.findAll({
    where: {
      status_sys: 0,
    },
  });
};
