class Conta {
    numero:number;
    titular:string; 
    constructor( t:string){
        this.numero = this.gerarNumeroConta() ;
        this.titular = t;
    }
    gerarNumeroConta():number{
    return Math.floor(Math.random()*100000)+1
    }
}
class ContaPF extends Conta {
cpf:number;
constructor(cpf:number, titulo:string){
super(titulo);
this.cpf = cpf
}

}
class ContaPJ extends Conta {
cnpj:number;
constructor(cnpj:number,titulo:string){
    super(titulo);
    this.cnpj = cnpj
}
}

const titular1 = new ContaPF(404,"Error");
const titular2 = new ContaPJ(505,'Gabriel')
console.log(titular1.titular)
console.log(titular1.numero)
 