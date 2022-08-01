var express = require("express");
var axios = require("axios");
const mysql = require("mysql2");

const nomes = [];

const connection = mysql.createConnection({
  host: "meteoro.mysql.database.azure.com",
  user: "allankevinscain",
  database: "meteoros",
  password: "Light123!",
  port: 3306,
});

var app = express();

const url =
  "https://meteoronaza.blob.core.windows.net/meteoronaza/meteoritos.json?sp=r&st=2022-06-06T19:02:05Z&se=2022-06-07T03:02:05Z&sv=2020-08-04&sr=c&sig=c1BFmzHLNRe12hYF1Rf0SQPkas%2BkvHNe%2B2X86Fooss0%3D";

function criarTabela() {
  let command = `
  CREATE TABLE IF NOT EXISTS meteoritos (
      id INT NOT NULL,
      nome VARCHAR(50) NULL DEFAULT NULL,
      latitude FLOAT NULL DEFAULT NULL,
      longitude FLOAT NULL DEFAULT NULL,
      massa FLOAT NULL DEFAULT NULL,
      PRIMARY KEY (id)
  )   
  `;

  return connection.query(command, (err, result) => {
    if (err) {
      console.error(err);
    }
    if (result) {
      console.log("Tabela criada com sucesso");
    }
  });
}

app.get("/", (req, res) => {
  axios
    .get(url)
    .then((response) => {
      let meteoritos = response.data;

      let insert =
        "INSERT INTO meteoritos (id, nome, latitude, longitude, massa) VALUES";
      meteoritos.forEach((meteorito, index) => {
        // console.log("tetse", meteorito);
        let id = parseInt(meteorito.id);
        let name = meteorito.name;
        let latitude = meteorito.geolocation?.coordinates[1];
        let longitude = meteorito.geolocation?.coordinates[0];
        let massa = meteorito.mass;
        let separador = index === meteoritos.length - 1 ? ";" : ",";

        insert += `(${id}, "${name}", ${parseFloat(latitude) || 0}, ${
          parseFloat(longitude) || 0
        }, ${parseFloat(massa) || 0})${separador}`;
      });

      criarTabela().on("result", () => {
        //Execução do comando insert
        console.log("TESTE", insert);
        connection.query(insert, (err, result) => {
          if (err) {
            console.error(err);
          }
          if (result) {
            console.log("Registros criados com sucesso");
          }
          res.send("Terminou de converter os meteoritos");
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log(`Rodando na porta ${3000}`);
});
