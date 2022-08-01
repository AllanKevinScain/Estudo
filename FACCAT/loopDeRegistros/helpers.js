import fs from "fs";

const filename = "tabela.txt";

function ler(outerFile = false) {
  let dados = fs.readFileSync(!outerFile ? filename : outerFile, "utf8");
  return dados;
}

function escrever(data, outerFile = false) {
  fs.writeFileSync(!outerFile ? filename : outerFile, `${data}`);
}

export { ler, escrever };
