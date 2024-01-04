"use strict";
class computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, ram, cpu) {
        console.log(" novo computador Criado");
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const comp1 = new computador("Rapidão", 64, 10);
const comp2 = new computador("carão", 32, 5);
const comp3 = new computador("Gamer", 128, 10);
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
