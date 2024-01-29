"use strict";
function f_teste(valor, r) {
    return r;
}
console.log(f_teste(10, '10'));
console.log(f_teste('10', 10));
console.log(f_teste(true, false));
class ClassTest {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new ClassTest(10);
const ct2 = new ClassTest('O de cima e um valor de objeto instaciando de uma classe ');
console.log(ct1.valor);
console.log(ct2.valor);
