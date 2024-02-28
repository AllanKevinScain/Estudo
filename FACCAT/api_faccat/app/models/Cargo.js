// Criando o modelo para Cargo

const nomeModel = 'Cargo';
const nomeTabela = 'cargos';

const Cargo = (sequelize, DataTypes) => {
  return sequelize.define(
    nomeModel,
    {
      idcargo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descrição: {
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
};

module.exports = Cargo;
