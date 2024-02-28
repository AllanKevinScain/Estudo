//Conexão com o banco de dados

const Sequelize = require('sequelize')

const nomeBanco = 'mydb'
const dadosAcesso = 'root'
const sequelize = new Sequelize(nomeBanco, dadosAcesso, dadosAcesso, { //3 param. Nome do banco, user e password
  host: "localhost",
  dialect: 'mysql',
  port: 3360
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}


