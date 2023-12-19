let numeros:number[] = [10,200,3000,40000]
// let numeros:Array<number> =  [10,200,3000,40000]
// let numeros:(number)[] = [10,200,3000,40000]

numeros.push(500000) // inserir no final do array
numeros.unshift(500000) // inserir no inicio do array
numeros.pop() // faz a  retirada no final do array
numeros.shift()// faz a retirada no inicio do array
console.log(numeros)

let numeros_ro:ReadonlyArray<number> = [10,200,3000,40000]
console.log(numeros_ro)