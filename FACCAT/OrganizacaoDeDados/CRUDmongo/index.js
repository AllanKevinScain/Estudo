import {
  asignedError,
  collectionPeaples,
  collectionProduct,
  collectionShop,
  conectionMongoDB,
} from "./functions";
var operacao = "";
var produtos = [];

if (process.argv.length == 3) {
  operacao = process.argv[2];
  if (operacao.length > 1) {
    asignedError(
      "Deve ser passado a operação a ser realizada: (C, R, U ou D)\nExemplo: node main.js C"
    );
    return;
  }
  if ("CRUD".indexOf(operacao) >= 0) {
    main();
  } else {
    asignedError(
      "Deve ser passado a operação a ser realizada: (C, R, U ou D)\nExemplo: node main.js C"
    );
  }
} else {
  asignedError(
    "Deve ser passado a operação a ser realizada: (C, R, U ou D)\nExemplo: node main.js C"
  );
}

// collectionPeaples("Eduardo", "12312312330", "12234566789");

// collectionProduct("Farinha 5kg", 1, 10.50);

async function main() {
  try {
    const baseDados = conectionMongoDB();
    const pessoas = baseDados.collection(`pessoas`);
    const produtos = baseDados.collection(`produtos`);
    const compras = baseDados.collection(`compras`);

    const produtosObj = await produtos.find().toArray();
    switch (operacao) {
      case "C":
        const objeto = {
          nome: "Eduardo",
          idade: 22,
          altura: 1.78,
        };

        //produtosObj = [produto(1), produto(2), produto(3), produto(4)];

        let pessoaId = "";
        let { insertedId } = await pessoas.insertOne(objeto);
        pessoaId = insertedId;

        //let { insertedIds } = await produtos.insertMany(produtosObj);

        let total = 0;
        produtosObj.map((produto) => {
          total += produto.preco;
        });

        let idsProd = [];

        produtosObj.map((prod) => {
          idsProd.push(prod._id);
        });
        let obj = {
          pessoaId: pessoaId,
          produtos: idsProd,
          total: total,
        };

        let compraObj = collectionShop(obj);

        await compras.insertOne(compraObj);

        break;
      case "R":
        let comprasFind = await compras.find().toArray();

        let idsProdFind = [];
        comprasFind.map((c) => {
          c.produtos.map((p) => {
            idsProdFind.push(p);
          });
        });

        prodArray = await produtos
          .find({ _id: { $in: idsProdFind } })
          .toArray();

        console.log(prodArray);

        break;
      case "U":
        const objetoNovo = {
          $set: {
            nome: "Allan",
            idade: 21,
            altura: 1.75,
          },
        };
        filtroAtualizar = { nome: "Eduardo" };
        let resultadoAtualizacao = await pessoas.updateOne(
          filtroAtualizar,
          objetoNovo
        );

        if (resultadoAtualizacao.modifiedCount == 0)
          console.log("Registro não atualizado!");
        else console.log("Registro atualizado: ", resultadoAtualizacao);

        break;
      case "D":
        filtroDeletar = { nome: "Allan" };
        let resultadoDeletar = await pessoas.deleteOne(filtroDeletar);

        if (resultadoDeletar.deletedCount == 0)
          console.log("Registro não deletado");
        else console.log("Registro deletado");

        break;
    }
  } catch (err) {
    console.log(err);
  } finally {
    conexao.close();
  }
}
