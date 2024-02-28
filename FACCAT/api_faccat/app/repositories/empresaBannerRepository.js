//Conexão com o modelo Empresa banner
const { EmpresaBanner } = require('../models');

// Cadastrar varios
exports.cadastrarVariosBanners = (...banners) => {
  return EmpresaBanner.bulkCreate(...banners);
};

// Cadastrar banner
exports.cadastrarBanner = (banner) => {
  return EmpresaBanner.create(banner);
};

// Ler banner
exports.lerBanner = (id) => {
  return EmpresaBanner.findOne({
    where: {
      id,
    },
  });
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return EmpresaBanner.findAll({
    where,
    attributos,
  });
};

// Ler todos banners
exports.lerTodosBanners = async () => {
  return EmpresaBanner.findAll();
};

// Alterar banner
exports.alterarBanner = (id, banner) => {
  return EmpresaBanner.update(banner, {
    where: {
      id,
    },
  });
};

// Remover varios
exports.deletarVariosBanners = (ids) => {
  return EmpresaBanner.destroy({ where: { id: ids } });
};
