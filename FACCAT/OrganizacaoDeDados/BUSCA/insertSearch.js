var fs = require("fs");
var readlineSync = require("readline-sync");
const filename = "tabela.txt";
function ler() {
  let dados = fs.readFileSync(filename, "utf8");
  return dados;
}

function getIndexes() {
  let dados = ler().split("\n");

  let indexes = dados.map((item, index) => console.log(`Chavde de cadastro ${item} - index - ${index}`));
}

function escrever(data) {
  fs.writeFileSync(filename, `${data}`);
}

function gravarDados(data) {
  let oldData = ler();

  oldDataArr = oldData.split("\n");

  for (let x = 0; x < oldDataArr.length; x++) {
    let linha = oldDataArr[x].split("|")[0];
    if (linha == data.chave) {
      console.log("Essa chave já existe");
      return false;
    }
  }

  escrever(`${oldData}\n${data.chave}|${data.nome}`);

  let newData = ler();
  let arrData = [];

  let splitData = newData.split("\n");
  for (let x = 0; x < splitData.length; x++) {
    let chave = parseInt(splitData[x].split("|")[0]);
    arrData.push({ chave: chave, dados: splitData[x] });
  }

  arrData = arrData.sort(function (a, b) {
    return a.chave < b.chave ? -1 : a.chave > b.chave ? 1 : 0;
  });
  let strFinal = "";
  for (let x = 0; x < arrData.length; x++) {
    if (arrData[x].dados != "") {

      strFinal += arrData[x].dados + ((x + 1) == arrData.length ? "" : "\n");
    }
  }

  escrever(`${strFinal}`);
  return true;
}

function buscaBinaria(data) {

  let dados = ler().split("\n");

  let prim = 0, meioLista = 0, chave = null;
  let ult = dados.length - 1, ultR = dados.length;
  let achou = false;
  let linhaEncontrada = "";

  while (prim <= ult && !achou) {
    meioLista = Math.ceil((prim + ult) / 2);
    chave = parseInt(dados[meioLista].split("|")[0]);
    if (chave == data) {
      linhaEncontrada = dados[meioLista];
      achou = true;
      break;
    } else {
      if (data < chave) {
        ult = meioLista - 1;
      }
      else {
        prim = meioLista + 1;
      }
    }
  }
  console.log("Boolean", achou);
  if (achou) {
    console.log("Registro encontrado: " + linhaEncontrada);
  }
};

function buscaSequencial(data) {
  let dados = ler().split("\n");
  if (data) {

    for (let linha of dados) {
      let chave = linha.split("|")[0];
      if (chave == data) {
        console.log("\nRegistro encontrado: " + linha + "\n");
      }
    };

  };
};
function buscaHashing(data) {
  getIndexes();
};

//Ler do teclado

var opt = "s";
cadastrarNovamente = false;
console.log("\n");
while (opt != "n") {
  if (!cadastrarNovamente) {
    console.log(
      `1 - Fazer a bisca binária\n2 - Fazer a busca sequencial\n3 - Fazer a busca Hashing\n4 - Cadastrar\n5 - Mostar a tabela de indices\nn - Sair\n`
    );


    opt = readlineSync.question("");
  }
  let busca = "";
  // Wait for user's response.
  switch (opt) {
    case "1":
      console.log("Busca Binária: ");
      buscaBinaria(readlineSync.question(
        "Digite a chave para a busca: "
      ));
      break;
    case "2":
      console.log("Busca Sequencial: ");

      buscaSequencial(readlineSync.question(
        "Digite a chave para a busca: "
      ));
      break;
    case "3":
      console.log("\nBusca Hashing: ");
      buscaHashing(readlineSync.question(
        "Digite a chave para a busca: "
      ));
      break;

    case "4":
      let chave = readlineSync.question("Chave: ");
      let nome = readlineSync.question("Nome: ");
      gravarDados({ chave, nome });
      opt = readlineSync.question("Deseja cadastrar novamente: S/N ");
      if (opt == "S") {
        cadastrarNovamente = true;
        opt = "4";
      }
      break;
    case "5":
      getIndexes();
      break;
    default:
      if (opt != 'n') {
        console.log("\nEssa opção não é válida\n");
      }
      break;
  }

}
