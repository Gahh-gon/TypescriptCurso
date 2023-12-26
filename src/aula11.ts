let nValor:number;
let sValor:string;
let uValor:unknown;

sValor = '10'
nValor = 10
sValor =  nValor.toString()
console.log(nValor)
// nValor = <number> <unknown> sValor
//console.log(nValor)

uValor = 'error';
// console.log(typeof uValor)
// console.log(uValor)
sValor = <string>uValor
nValor = <number>uValor

// console.log(typeof sValor)
// console.log( typeof nValor)