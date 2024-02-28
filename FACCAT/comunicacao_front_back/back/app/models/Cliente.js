//Modelo para Cliente Sequelize / Banco de dados.

//Importando o arquivo de conexão com o banco de dados.
const db = require('./db')

//Criando o modelo para Cliente
const Cliente = db.sequelize.define('clientes', {
  idcliente: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER
  },
  nome: {
    type: db.Sequelize.STRING
  },
  titulo: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  telefone: {
    type: db.Sequelize.STRING
  },
  senha: {
    type: db.Sequelize.STRING
  },
  permissoes: {
    type: db.Sequelize.STRING
  },
  sexo: { // dados da tabela editar usuário >> informações pessoais
    type: db.Sequelize.STRING
  },
  estadocivil: {
    type: db.Sequelize.STRING
  },
  cpf: {
    type: db.Sequelize.STRING
  },
  datanascimento: {
    type: db.Sequelize.STRING
  },
  nacionalidade: {
    type: db.Sequelize.STRING
  },
  celular: { // tabela editar usuários >> contato
    type: db.Sequelize.STRING
  },
  cep: {
    type: db.Sequelize.STRING
  },
  bairro: {
    type: db.Sequelize.STRING
  },
  logradouro: {
    type: db.Sequelize.STRING
  },
  cidade: {
    type: db.Sequelize.STRING
  },
  numero: {
    type: db.Sequelize.STRING
  },
  complemento: {
    type: db.Sequelize.STRING
  },
  estado: {
    type: db.Sequelize.STRING
  },
  ocupacao: { // >> dados complementares
    type: db.Sequelize.STRING
  },
  grauinstrucao: {
    type: db.Sequelize.STRING
  },
  vincempregaticio: {
    type: db.Sequelize.STRING
  },
  rendamensal: {
    type: db.Sequelize.STRING
  },
  tipocliente_idtipocliente: {
    type: db.Sequelize.INTEGER,
    references: {
      model: 'tipoclientes',
      key: 'idtipocliente',
    },
    allowNull: false,
  },
  idusuario: {
    type: db.Sequelize.INTEGER,
    references: {
      model: 'usuarios',
      key: 'idusuario',
    },
    allowNull: false,
  },
  status_sys: {
    type: db.Sequelize.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: db.Sequelize.INTEGER
  },
  imgBase64: {
    type: db.Sequelize.BLOB("long")
  },
})

//Método para criar o  modelo Usuário (Executar somente uma vez)
//Cliente.sync({ force: true })

//Exportando o módulo para usar em outros arquivos
module.exports = Cliente
