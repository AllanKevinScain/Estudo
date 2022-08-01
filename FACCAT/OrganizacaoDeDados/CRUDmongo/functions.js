import MongoDB from "mongodb";
const mongoClient = MongoDB.MongoClient;
import { urlConexao } from "./constants";

const asignedError = (message) => {
  console.log(message);
};

const collectionPeaples = (name, document, phone) => {
  return {
    nome: name,
    cpf: document,
    telefone: phone,
  };
};

const collectionProduct = (name, qtd, price) => {
  return {
    nome: name,
    qtd: qtd,
    preco: price,
  };
};

const collectionShop = (buy) => {
  return {
    pessoaId: buy.pessoaId,
    produtos: buy.produtos,
    total: buy.total,
  };
};

const conectionMongoDB = () => {
  mongoClient.connect(
    urlConexao,
    { useUnifiedTopology: true },
    (err, connection) => {
      if (err) {
        return asignedError(err);
      }
      return (global.connection = connection.db("mongodatabase"));
    }
  );
};

export {
  asignedError,
  collectionPeaples,
  collectionShop,
  collectionProduct,
  conectionMongoDB,
};
