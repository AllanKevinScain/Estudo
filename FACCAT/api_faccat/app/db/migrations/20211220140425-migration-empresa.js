'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* a função de espera que cria a tabela */
    await queryInterface.createTable('empresas', {
      idempresa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'usuarios',
          key: 'idusuario',
        },
        allowNull: false,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT('medium'),
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      cnpj: {
        type: Sequelize.DataTypes.STRING,
      },
      cep: {
        type: Sequelize.DataTypes.STRING,
      },
      bairro: {
        type: Sequelize.DataTypes.STRING,
      },
      logradouro: {
        type: Sequelize.DataTypes.STRING,
      },
      cidade: {
        type: Sequelize.DataTypes.STRING,
      },
      numero: {
        type: Sequelize.DataTypes.STRING,
      },
      telefone: {
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
    await queryInterface.dropTable('empresas');
  },
};
