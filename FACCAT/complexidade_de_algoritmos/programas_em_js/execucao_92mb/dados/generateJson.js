import fs from "fs";

const arquivo = fs.readFileSync("./output.txt", "utf-8");

const splitByEnter = arquivo.split("\n");
const removeR = splitByEnter.map((linha) => linha.replace("\r", ""));
const splitByTab = removeR.map((linha) => linha.split(" "));
const removeFirsSpace = splitByTab.map((linha) =>
  linha.filter((_, index) => {
    if (index !== 0 && _) return _;
  })
);

const codeNames = removeFirsSpace.shift();

function writeJson(archiveName, data) {
  fs.writeFile(archiveName, data, (err) => {
    if (err) {
      console.error("Erro ao escrever o arquivo:", err);
    } else {
      console.log(`Arquivo ${archiveName} criado com sucesso!`);
    }
  });
}

let object = {};
codeNames.forEach((algorithm, index) => {
  let concatArray = new Array(0);

  removeFirsSpace.forEach((a) => {
    concatArray.push(a[index]);
  });

  object[algorithm] = concatArray;
  concatArray = new Array(0);
});
const jsonResult = JSON.stringify(object, null, 2);

writeJson(`dados.json`, jsonResult);
