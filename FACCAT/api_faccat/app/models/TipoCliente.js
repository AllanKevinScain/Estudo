// Criando o modelo para TipoCliente

const nomeModel = 'TipoCliente';
const nomeTabela = 'tipoclientes';

const TipoCliente = (sequelize, DataTypes) => {
  return sequelize.define(
    nomeModel,
    {
      idtipocliente: {
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

module.exports = TipoCliente;
