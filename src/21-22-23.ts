class Conta {
    //Public acessado de qualquer lugar 
    //Private acessado somente na sua propria classe
    // Protected acessado somente na sua propria classe e nas classes filho
   protected numero:number;
   protected titular:string; 
   private saldo:number;
    constructor( t:string){
        this.numero = this.gerarNumeroConta() ;
        this.titular = t;
        this.saldo = 0
    }
  private  gerarNumeroConta():number{
    return Math.floor(Math.random()*100000)+1
    }
   protected info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
      
        }
        public saldoConta():number{
             return this.saldo
         }
         protected deposito(valor:number):void{
            this.saldo += valor
         }
         protected saque(valor:number):void{
            if(valor >= this.saldo){
                  this.saldo -= valor
            }
            console.log(`Saldo insuficiente: ${this.saldo}`)
          
         }
}


class ContaPF extends Conta {
cpf:number;
constructor(cpf:number, titular:string){
super(titular);
this.cpf = cpf


}
info(){
    console.log(`Tipo......PF`)
    super.info()
    console.log(`CPF.....${this.cpf}`)
    console.log('--------------------------------------')
}
deposito(valor:number):void{
    if(valor >= 1000){
        console.log('Valor de deposito muito alto para esse tipo de conta')
    }else{
       super.deposito(valor) 
    }  
}
}



class ContaPJ extends Conta {
cnpj:number;
constructor(cnpj:number,titular:string){
    super(titular);
    this.cnpj = cnpj
   
    
}
info(){
    console.log(`Tipo......PJ`)
    super.info()
    console.log(`CNPJ.....${this.cnpj}`)
    console.log('--------------------------------------')
}
deposito(valor:number):void{
    if(valor >= 10000){
        console.log('Valor de deposito muito alto para esse tipo de conta')
    }else{
       super.deposito(valor) 
    }  
}
}

const titular1 = new ContaPF(404,"Gabriel");
const titular2 = new ContaPJ(505,'Error')
// titular1.info()
// titular2.info()
// console.log(titular1.titular)
// console.log(titular1.numero)
titular1.deposito(800)
titular1.deposito(20)
titular1.deposito(900)
console.log(titular1.saldoConta())