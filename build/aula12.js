"use strict";
function logar(user, password) {
    console.log(user);
    console.log(password);
}
logar('error', '456');
logar('Test', '008');
function somar2(n1, n2) {
    let valor = n1 + n2;
    return valor;
}
const n_res = somar2(10, 12);
const s_res = somar2(10, 12).toString();
console.log(n_res);
console.log(s_res);
