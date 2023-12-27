"use strict";
const teste = (text) => {
    console.log(text);
};
const somar = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numerosArray = [1, 2, 3, 4, 5, 6, 7];
console.log(somar(numerosArray));
teste('error');
teste();
