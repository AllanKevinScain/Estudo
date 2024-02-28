'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_avatar', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'usuarios',
          key: 'idusuario',
        },
        allowNull: false,
      },
      titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      formato: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      titulo_original: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario_avatar');
  },
};
