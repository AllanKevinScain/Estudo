'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      idusuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
      cargo: {
        type: Sequelize.DataTypes.STRING,
      },
      incluido: {
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      telefone: {
        type: Sequelize.DataTypes.STRING,
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
      },
      permissoes: {
        type: Sequelize.DataTypes.STRING,
      },
      sexo: {
        // dados da tabela editar usuário >> informações pessoais
        type: Sequelize.DataTypes.STRING,
      },
      estadocivil: {
        type: Sequelize.DataTypes.STRING,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING,
      },
      datanascimento: {
        type: Sequelize.DataTypes.STRING,
      },
      nacionalidade: {
        type: Sequelize.DataTypes.STRING,
      },
      /* celular: { // tabela editar usuários >> contato
        type: Sequelize.DataTypes.STRING
      }, */
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
      complemento: {
        type: Sequelize.DataTypes.STRING,
      },
      estado: {
        type: Sequelize.DataTypes.STRING,
      },
      ocupacao: {
        // >> dados complementares
        type: Sequelize.DataTypes.STRING,
      },
      grauinstrucao: {
        type: Sequelize.DataTypes.STRING,
      },
      vincempregaticio: {
        type: Sequelize.DataTypes.STRING,
      },
      rendamensal: {
        type: Sequelize.DataTypes.STRING,
      },
      cargo_idcargo: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'cargos',
          key: 'idcargo',
        },
        allowNull: false,
      },
      status_sys: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  },
};
