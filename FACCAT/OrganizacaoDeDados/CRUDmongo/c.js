// module.exports = async function create(
//   pessoas,
//   produtos,
//   compras,
//   produtosObj
// ) {
//   const objeto = {
//     nome: "Eduardo",
//     idade: 22,
//     altura: 1.78,
//   };

//   //produtosObj = [produto(1), produto(2), produto(3), produto(4)];

//   let pessoaId = "";
//   let { insertedId } = await pessoas.insertOne(objeto);
//   pessoaId = insertedId;

//   //let { insertedIds } = await produtos.insertMany(produtosObj);

//   let total = 0;
//   produtosObj.map((produto) => {
//     total += produto.preco;
//   });

//   let idsProd = [];

//   produtosObj.map((prod) => {
//     idsProd.push(prod._id);
//   });
//   let obj = {
//     pessoaId: pessoaId,
//     produtos: idsProd,
//     total: total,
//   };

//   let compraObj = compra(obj);

//   await compras.insertOne(compraObj);
// };
