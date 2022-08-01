const express = require("express");
const app = express();
const api = require("./api");
const convert = require("xml-js");
const port = 6600;

app.listen(port, () => {
  console.log(`A porta ${port} está aberta!`);
});

app.get("/", async (_, __) => {
  try {
    const { data } = await api.get();
    const conversion = JSON.parse(convert.xml2json(data));

    conversion.elements[0].elements.map((item) => {
      item.elements.map((elementsItems) => {
        if (elementsItems.elements.length > 1) {
          console.log(elementsItems.name, ": ");
          elementsItems.elements.map((info) => {
            console.log(`\t${info.name}:`, info.elements[0].text);
          });
        } else {
          console.log(
            `${elementsItems.name}: `,
            elementsItems.elements[0].text
          );
        }
      });
      console.log("\n\n\n");
    });
  } catch (error) {
    res.send({ error: error });
  }
});

/* 
1 - Contas de armazenamento
2 - Criar uma conta
3 - Entrar nela
4 - Ir em containers no canto esquerdo
5 - Criar um container tipo Bloob
6 - Carregar um arquivo xml
7 - Consumir a url, no caso = https://tablebook.blob.core.windows.net/book-one/book.xml;
*/
