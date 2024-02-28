'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cargos', {
      idcargo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      descrição: {
        type: Sequelize.DataTypes.STRING,
      },
      status_sys: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cargos');
  },
};
