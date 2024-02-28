// Criando o modelo para Banners das empresas

const nomeModel = 'UsuarioAvatar';
const nomeTabela = 'usuario_avatar';

const UsuarioAvatar = (sequelize, DataTypes) => {
  const _UsuarioAvatar = sequelize.define(
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

          const avatarsPath = process.env.USUARIO_AVATAR_PATH;

          return `http://${url}:${porta}/${avatarsPath}/${this.titulo}.${this.formato}`;
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

  _UsuarioAvatar.associate = (models) => {
    _UsuarioAvatar.belongsTo(models.Usuario, {
      constraint: true,
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  };

  return _UsuarioAvatar;
};

module.exports = UsuarioAvatar;
