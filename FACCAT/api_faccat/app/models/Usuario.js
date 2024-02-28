// Criando o modelo para Usuário

const bcrypt = require('bcrypt');

const gerarSaltoBcrypt = require('../utils/gerarSaltoBcrypt');

const nomeModel = 'Usuario';
const nomeTabela = 'usuarios';

const Usuario = (sequelize, DataTypes) => {
  const _Usuario = sequelize.define(
    nomeModel,
    {
      idusuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        type: DataTypes.STRING,
      },
      cargo: {
        type: DataTypes.STRING,
      },
      incluido: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      senha: {
        type: DataTypes.STRING,
      },
      permissoes: {
        type: DataTypes.STRING,
      },
      sexo: {
        // dados da tabela editar usuário >> informações pessoais
        type: DataTypes.STRING,
      },
      estadocivil: {
        type: DataTypes.STRING,
      },
      cpf: {
        type: DataTypes.STRING,
      },
      datanascimento: {
        type: DataTypes.STRING,
      },
      nacionalidade: {
        type: DataTypes.STRING,
      },
      /* celular: { // tabela editar usuários >> contato
    type: DataTypes.STRING
    }, */
      cep: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      logradouro: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.STRING,
      },
      complemento: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      ocupacao: {
        // >> dados complementares
        type: DataTypes.STRING,
      },
      grauinstrucao: {
        type: DataTypes.STRING,
      },
      vincempregaticio: {
        type: DataTypes.STRING,
      },
      rendamensal: {
        type: DataTypes.STRING,
      },
      cargo_idcargo: {
        type: DataTypes.INTEGER,
        references: {
          model: 'cargos',
          key: 'idcargo',
        },
        allowNull: false,
      },
      status_sys: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: nomeTabela,
    }
  );

  _Usuario.addHook('beforeCreate', async (usuario) => {
    if (usuario.senha) {
      const salto = await gerarSaltoBcrypt();
      usuario.senha = bcrypt.hashSync(usuario.senha, salto);
    }
  });

  _Usuario.addHook('beforeBulkUpdate', async (config) => {
    if (config.attributes.senha) {
      const salto = await gerarSaltoBcrypt();
      config.attributes.senha = bcrypt.hashSync(config.attributes.senha, salto);

      return config;
    }
  });
  _Usuario.prototype.validarSenha = function (senha) {
    return bcrypt.compareSync(senha, this.senha);
  };

  _Usuario.associate = (models) => {
    _Usuario.hasOne(models.UsuarioAvatar, {
      constraint: true,
      foreignKey: 'id_usuario',
      as: 'avatar',
    });
  };

  return _Usuario;
};

module.exports = Usuario;
