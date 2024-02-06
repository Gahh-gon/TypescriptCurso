"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.coisas = void 0;
const coisas = ['corda', 'Pilha', 'lampada', 'chave'];
exports.coisas = coisas;
class Pessoa {
    nome;
    altura;
    constructor(n, al) {
        this.nome = n;
        this.altura = al;
    }
}
;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
;
exports.default = Pessoa;
