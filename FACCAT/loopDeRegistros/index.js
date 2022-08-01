import readlineSync from "readline-sync";
import { ler, escrever } from "./helpers.js";
let cadastrarNovamente = false;
let opt = null;
let oldDataArr = null;
let oldData = null;

function gravarDados(data) {
  oldData = ler();
  oldDataArr = oldData.split("\n");

  for (let x = 0; x < 10; x++) {
    escrever(`${oldData}\n${data.chave}|${data.nome}`);
  }
}

//Ler do teclado
console.log("\n");
do {
  if (!cadastrarNovamente) {
    console.log(`1 - Cadastrar em texto\n2 - Cadastrar em binário\nn - Sair\n`);
    opt = readlineSync.question("");
  }

  switch (opt) {
    case "1":
      let nome = readlineSync.question("Nome: ");
      gravarDados(nome);
      opt = readlineSync.question("Deseja cadastrar novamente: S/N ");
      if (opt == "S") {
        cadastrarNovamente = true;
        opt = "4";
      } else {
        cadastrarNovamente = false;
        opt = "S";
      }
      break;
    case "2":
      console.log("Busca Sequencial: ");
      buscaSequencial(readlineSync.question("Digite a chave para a busca: "));

      break;
    default:
      if (opt != "n") {
        console.log("\nEssa opção não é válida\n");
      }
      break;
  }
} while (opt != "n");
