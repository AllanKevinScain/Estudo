// Criando o modelo para Empresa

const nomeModel = 'Empresa';
const nomeTabela = 'empresas';

const Empresa = (sequelize, DataTypes) => {
  const _Empresa = sequelize.define(
    nomeModel,
    {
      idempresa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuario',
          key: 'idusuario',
        },
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
      },
      descricao: {
        type: DataTypes.TEXT('medium'),
      },
      email: {
        type: DataTypes.STRING,
      },
      cnpj: {
        type: DataTypes.STRING,
      },
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
      telefone: {
        type: DataTypes.STRING,
      },
      status_sys: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: nomeTabela,
    }
  );

  _Empresa.associate = (models) => {
    _Empresa.hasMany(models.EmpresaBanner, {
      constraint: true,
      foreignKey: 'id_empresa',
      as: 'banners',
    });
  };

  return _Empresa;
};

module.exports = Empresa;
