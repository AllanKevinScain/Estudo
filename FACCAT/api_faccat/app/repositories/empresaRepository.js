//Conexão com o modelo Empresa
const { Empresa, EmpresaBanner } = require('../models');

// Cadastrar empresa
exports.cadastrarEmpresa = (empresa, banners) => {
  return Empresa.create(
    {
      ...empresa,
      banners,
    },
    {
      include: [
        {
          model: EmpresaBanner,
          as: 'banners',
        },
      ],
    }
  );
};

// Ler empresa
exports.lerEmpresa = (id) => {
  return Empresa.findByPk(id, {
    include: [
      {
        model: EmpresaBanner,
        as: 'banners',
      },
    ],
  });
};

// Ler Por
exports.lerPor = (where, attributos) => {
  return Empresa.findOne({
    where,
    attributos,
  });
};

// Ler todas empresas
exports.lerTodasEmpresas = async () => {
  return Empresa.findAll({
    where: {
      status_sys: 0,
    },
  });
};

// Alterar empresa
exports.alterarEmpresa = (idEmpresa, empresa) => {
  return Empresa.update(empresa, {
    where: {
      idempresa: idEmpresa,
      status_sys: 0,
    },
  });
};

// Deletar Empresa
exports.deletarEmpresa = (idEmpresa) => {
  const statusDeletado = 1;

  return Empresa.update(
    { status_sys: statusDeletado },
    {
      where: {
        idempresa: idEmpresa,
      },
    }
  );
};
