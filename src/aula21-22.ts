class Conta {
   protected numero:number;
   protected titular:string; 
    constructor( t:string){
        this.numero = this.gerarNumeroConta() ;
        this.titular = t;
    }
  private  gerarNumeroConta():number{
    return Math.floor(Math.random()*100000)+1
    }
    info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
        }
}
class ContaPF extends Conta {
cpf:number;
constructor(cpf:number, titular:string){
super(titular);
this.cpf = cpf
console.log(`Conta Pf criada: ${this.titular}`)
}

}
class ContaPJ extends Conta {
cnpj:number;
constructor(cnpj:number,titular:string){
    super(titular);
    this.cnpj = cnpj
    console.log(`Conta Pj criada: ${this.titular}`)
    
}
}

const titular1 = new ContaPF(404,"Error");
const titular2 = new ContaPJ(505,'Gabriel')
titular1.info()
titular2.info()
// console.log(titular1.titular)
// console.log(titular1.numero)
 