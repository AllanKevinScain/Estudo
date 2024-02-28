//Modelo para Tipo Cliente Sequelize / Banco de dados.

//Importando o arquivo de conexão com o banco de dados.
const db = require('./db')

//Criando o modelo para Cargo
const TipoCliente = db.sequelize.define('tipoclientes', {
  idtipocliente: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER
  },
  descrição: {
    type: db.Sequelize.STRING
  },
  status_sys: {
    type: db.Sequelize.INTEGER,
    defaultValue: 0,
  },
})

//Método para criar o  modelo Usuário (Executar somente uma vez)
//TipoCliente.sync({ force: true })

//Exportando o módulo para usar em outros arquivos
module.exports = TipoCliente