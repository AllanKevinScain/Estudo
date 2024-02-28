'use strict';

const bcrypt = require('bcrypt');

const gerarSaltoBcrypt = require('../../utils/gerarSaltoBcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltoBcrypt = await gerarSaltoBcrypt();

    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          nome: 'João da Silva',
          email: 'joao@dominio.com',
          telefone: '51999999999',
          senha: bcrypt.hashSync('senhasecreta123', saltoBcrypt),
          estadocivil: 'solteiro',
          cargo_idcargo: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
