const express = require("express");
const app = express();
const api = require("./api");
const mysql = require("mysql2");
const port = 3000;

const conn = mysql.createConnection({
  host: "meteoro.mysql.database.azure.com",
  user: "allankevinscain",
  password: "Light123!",
  database: "meteoros",
  port: 3306,
});

app.listen(port, () => {
  console.log(`A porta ${port} está aberta!`);
});

conn.connect((err) =>
  err
    ? console.log("Erro ao conectar ao servidor: ", err)
    : console.log("O servidor foi autenticado!")
);

app.get("/", async (_, res) => {
  try {
    const { data } = await api.get();
    res.send({ data: data });
  } catch (error) {
    res.send({ error: error });
  }
});

const sqlProperties =
  "(id, name,nametype, recclass, fall, reclat, reclong, coordinates1, coordinates2, year, type)";

app.get("/inserir", async (_, res) => {
  try {
    const { data } = await api.get();
    let insertSql = `INSERT INTO meteoros ${sqlProperties} VALUES `;

    data.map((item, index) => {
      let correctName = item.name
        .replace("'", " ")
        .replace("Ł", " ")
        .replace("ş", " ")
        .replace("ł", " ");
      if (data.length - 1 === index) {
        insertSql =
          insertSql +
          `(${parseInt(item.id)}, "${correctName}", "${item.nametype}", "${
            item.recclass
          }", "${item.fall}", "${item.reclat}", "${item.reclong}","${
            item.geolocation?.coordinates[0] || 0
          }", "${item.geolocation?.coordinates[1] || 0}", "${item.year}", "${
            item.geolocation.type
          }");`;
      } else {
        insertSql =
          insertSql +
          `(${parseInt(item.id)}, "${correctName}", "${item.nametype}", "${
            item.recclass
          }", "${item.fall}", "${item.reclat}", "${item.reclong}","${
            item.geolocation?.coordinates[0] || 0
          }", "${item.geolocation?.coordinates[1] || 0}", "${item.year}", "${
            item.geolocation?.type || ""
          }"),`;
      }
    });

    conn.query(insertSql, (err) => {
      if (!err) {
        console.log("Meteoro adicionado com sucesso");
        res.send({ data: "Meteoros cadastrados com sucesso!" });
      } else {
        console.log("Meteoro nao adicionado.", err);
        res.send({ error: err });
      }
    });
  } catch (error) {
    console.log("Erro: ", error);
    res.send({ error: error });
  }
});

app.get("/procurar", async (_, res) => {
  const selectId = 1;
  try {
    const selectWhereSql = `SELECT * FROM meteoros WHERE id = ${selectId}`;
    conn.query(selectWhereSql, (err, result) => {
      if (!err) {
        console.log("Meteoro achado: ", result);
        res.send({ data: result });
      } else {
        console.log("Meteoro nao encontrado.", err);
        res.send({ error: err });
      }
    });
  } catch (error) {}
});

app.get("/deletar", async (_, res) => {
  const deleteId = 1;
  const deleteSql = `DELETE FROM meteoros WHERE id = ${deleteId}`;
  try {
    conn.query(deleteSql, (err, result) => {
      if (!err) {
        console.log("Meteoro deletado com sucesso");
        res.send({
          data: `Meteoro ${deleteId} deletado com sucesso ${result}`,
        });
      } else {
        console.log("Meteoro nao deletado.", err);
        res.send({ error: err });
      }
    });
  } catch (error) {}
});

app.get("/deletartudo", async (_, res) => {
  const deleteAllSql = `DELETE FROM meteoros`;
  try {
    conn.query(deleteAllSql, (err, result) => {
      if (!err) {
        console.log("Tabela deletada com sucesso");
        res.send({
          data: `Tabela deletada com sucesso`,
        });
      } else {
        console.log("Tabela nao deletada.", err);
        res.send({ error: err });
      }
    });
  } catch (error) {}
});
