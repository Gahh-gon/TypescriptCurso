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
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta Pf criada: ${this.titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta Pj criada: ${this.titular}`);
    }
}
const titular1 = new ContaPF(404, "Error");
const titular2 = new ContaPJ(505, 'Gabriel');
titular1.info();
titular2.info();
