"use strict";
class Conta {
    numero;
    titular;
    constructor(n, t) {
        this.numero = n;
        this.titular = t;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const titular1 = new ContaPF(404, "Error");
