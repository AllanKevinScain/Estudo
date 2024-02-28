import { openDB } from "../configDB.js";

/* caso nao exista tabela pessoa, este endpoint cria uma tabela Pessoa */
export async function createTable() {
  openDB().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
  });
};

/* end point que busca todas as pessoas da tabela */
export async function selectPessoas(req, res) {
  openDB().then(db => {
    db.all('SELECT * FROM Pessoa')
      .then(pessoas => res.json(pessoas));
  });
};

/* end point que busca uma pessoa da tabela */
export async function selectPessoa(req, res) {
  let id = req.params.id;
  openDB().then(db => {
    db.get('SELECT * FROM Pessoa WHERE id=?', [id])
      .then(pessoa => res.json(pessoa));
  });
};

/* end point que cadastra uma pessoa da tabela */
export async function insertPessoa(req, res) {
  let pessoa = req.body;
  openDB().then(db => {
    db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
  });
  res.json({
    "statusCode": 200
  });
};

/* end point que altera os dados de uma pessoa da tabela */
export async function updatePessoa(req, res) {
  let pessoa = req.body;
  openDB().then(db => {
    db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
  });
  res.json({
    "statusCode": 200
  });
};

/* end point que deleta uma pessoa da tabela */
export async function deletePessoa(req, res) {
  let id = req.params.id;

  console.log(id);
  console.log(req.body);

  openDB().then(db => {
    db.get('DELETE FROM Pessoa WHERE id=?', [id])
      .then(pessoa => res.json(pessoa));
  });
  res.json({
    "statusCode": 200
  });
};

