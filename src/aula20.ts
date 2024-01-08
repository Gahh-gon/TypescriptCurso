class Conta {
    numero:number;
    titular:string; 
    constructor(n:number, t:string){
        this.numero = n;
        this.titular = t;
    }
}
class ContaPF extends Conta {

}
class ContaPJ extends Conta {

}

const titular1 = new ContaPF(404,"Error");
 