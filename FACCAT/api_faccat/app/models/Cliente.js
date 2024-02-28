// Criando o modelo para Cliente

const nomeModel = 'Cliente';
const nomeTabela = 'clientes';

const Cliente = (sequelize, DataTypes) => {
  return sequelize.define(
    nomeModel,
    {
      idcliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        type: DataTypes.STRING,
      },
      franquia: {
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
      plano: {
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
      tipocliente_idtipocliente: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tipoclientes',
          key: 'idtipocliente',
        },
        allowNull: false,
      },
      idusuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usuarios',
          key: 'idusuario',
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
      imgBase64: {
        type: DataTypes.BLOB('long'),
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: nomeTabela,
    }
  );
};

module.exports = Cliente;
