'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'usuario_avatar',
      [
        {
          titulo: 'avatar-exemplo',
          titulo_original: 'imagem_cachorro',
          formato: 'jpg',
          id_usuario: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_avatar', null, {});
  },
};
