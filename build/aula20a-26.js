"use strict";
class Conta {
    numero;
    titular;
    saldo;
    constructor(t) {
        this.numero = this.gerarNumeroConta();
        this.titular = t;
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    get saldoConta() {
        return this.saldo;
    }
    set SetSaldoConta(ValSaldoConta) {
        this.saldo = ValSaldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('Valor Inválido');
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('Valor Inválido');
            return;
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo insuficiente: ${this.saldo}`);
        }
    }
}
class ContaPF extends Conta {
    cpf;
    taxaCalculo;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        this.taxaCalculo = 10;
    }
    CalcularTrib(valor) {
        return valor * this.taxaCalculo;
    }
    info() {
        console.log(`Tipo......PF`);
        super.info();
        console.log(`CPF.....${this.cpf}`);
        console.log('--------------------------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor de deposito muito alto para esse tipo de conta');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo......PJ`);
        super.info();
        console.log(`CNPJ.....${this.cnpj}`);
        console.log('--------------------------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor de deposito muito alto para esse tipo de conta');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        }
        else {
            super.saque(valor);
        }
    }
}
const titular1 = new ContaPF(404, "Gabriel");
const titular2 = new ContaPJ(505, 'Error');
titular1.deposito(800);
titular1.deposito(20);
titular1.deposito(900);
console.log(titular1.saldoConta);
