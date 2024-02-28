class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678910;

const contacorrenteRicardo = new ContaCorrente();
contacorrenteRicardo.saldo = 0;
contacorrenteRicardo.agencia = 1101;
contacorrenteRicardo.saldo = 100;
contacorrenteRicardo.sacar(200);


console.log(contacorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);