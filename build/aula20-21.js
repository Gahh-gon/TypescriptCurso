"use strict";
class Conta {
    numero;
    titular;
    constructor(t) {
        this.numero = this.gerarNumeroConta();
        this.titular = t;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titulo) {
        super(titulo);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titulo) {
        super(titulo);
        this.cnpj = cnpj;
    }
}
const titular1 = new ContaPF(404, "Error");
const titular2 = new ContaPJ(505, 'Gabriel');
console.log(titular1.titular);
console.log(titular1.numero);
