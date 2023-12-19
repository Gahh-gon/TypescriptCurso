let dados = {
    nome:"Error",
    idade:20,
   status:'Active',
   ola:()=>{console.log('Olá')},
   info:(p:string)=>{console.log(p)}
};

console.log(typeof dados)
console.log( dados.nome)
dados.ola()
dados.info(`Nome: ${dados.nome} idade: ${dados.idade} `)