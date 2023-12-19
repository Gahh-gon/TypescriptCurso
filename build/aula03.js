"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
const c1 = new Curso('imovireis', 'typescript');
console.log(c1.canal);
console.log(c1.curso);
