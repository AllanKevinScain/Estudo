//Conexão com o modelo Cargo
const { Cargo } = require('../models');

// Cadastrar Cargo
exports.cadastrarCargo = (cargo) => {
  return Cargo.create(cargo);
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return Cargo.findOne({
    where,
    attributos,
  });
};

// Ler Cargo
exports.lerCargos = (cargoId) => {
  return Cargo.findAll({
    where: {
      status_sys: 0,
    },
  });
};
