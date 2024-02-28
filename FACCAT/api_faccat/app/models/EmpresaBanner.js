// Criando o modelo para Banners das empresas

const nomeModel = 'EmpresaBanner';
const nomeTabela = 'empresa_banner';

const EmpresaBanner = (sequelize, DataTypes) => {
  const _EmpresaBanner = sequelize.define(
    nomeModel,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      formato: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      titulo_original: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.VIRTUAL,
        get() {
          const url = process.env.URL;
          const porta = process.env.PORT;

          const empresaBannersPath = process.env.EMPRESA_BANNERS_PATH;

          return `http://${url}:${porta}/${empresaBannersPath}/${this.titulo}.${this.formato}`;
        },
        set() {
          throw new Error('A url não deve ser alterada na instancia');
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: nomeTabela,
    }
  );

  _EmpresaBanner.associate = (models) => {
    _EmpresaBanner.belongsTo(models.Empresa, {
      constraint: true,
      foreignKey: 'id_empresa',
      as: 'empresa',
    });
  };

  return _EmpresaBanner;
};

module.exports = EmpresaBanner;
