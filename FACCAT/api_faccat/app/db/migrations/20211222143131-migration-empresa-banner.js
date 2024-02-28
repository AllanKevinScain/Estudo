'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empresa_banner', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_empresa: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'empresas',
          key: 'idempresa',
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
    await queryInterface.dropTable('empresa_banner');
  },
};
