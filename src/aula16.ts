class computador {
    nome:string ='';
    mem:number=0;
    cpu:number= 0;
    ligado:boolean = false;
}

const comp1 = new computador();
const comp2 = new computador();
const comp3 = new computador();

comp1.nome = 'Rapidão'
comp2.nome = 'gloria'
comp3.nome = 'gamer'

console.log(comp1.nome)
console.log(comp2.nome)
console.log(comp3.nome)