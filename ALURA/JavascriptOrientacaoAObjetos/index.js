const cliente2 = {
  nome: "andre",
  idade: 36,
  cpf: "123456789",
  email: "andre@gmail.com",
};

console.log(`Desafio 1`);
console.log(
  `Printamos em tela os dados de um obejto: ${cliente2.nome}, ${cliente2.idade}, ${cliente2.email}, ${cliente2.cpf}`
);
console.log(
  `Posso limitar uma string dessa forma: ${cliente2.nome.substring(
    0,
    3
  )}, usando o método substring`
);

const chaves = ["nome", "idade", "cpf", "email"];
console.log(`Desafio 2`);
console.log(
  `Printamos em tela os dados de um objeto usando chaves: ${
    cliente2[chaves[0]]
  }`
);
console.log(`Podemos usar também o forEach para mostrar todos os dados:`);
chaves.forEach((dado) => console.log(cliente2[dado]));

cliente2.fone = "05112341234";
console.log(`Desafio 3`);
console.log(`Adicionamos uma nova informação a um obejto: ${cliente2.fone}`);
cliente2.fone = "8121e4";
console.log(`Podemos mudar esta informação também: ${cliente2.fone}`);

console.log(`Desafio 4`);
console.log(
  `Fazer uma chamada de função dentro de um objeto e dentro deste somar uma campo.`
);
const bloco = {
  saldo: 100,
  depositar: (valor) => {
    this.saldo += valor;
  },
};
console.log("Valor do Saldo", saldo);
bloco.depositar(100);
console.log("Valor do Saldo agora", saldo);
