"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Pessoa = void 0;
class Pessoa {
    nome;
    altura;
    constructor(n, al) {
        this.nome = n;
        this.altura = al;
    }
}
exports.Pessoa = Pessoa;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
